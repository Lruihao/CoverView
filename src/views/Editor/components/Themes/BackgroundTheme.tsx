import type { BasicPhoto, GetPhotosOptions } from '@/services/unsplash'
import type { ColorId, Orientation } from 'unsplash-js'
import type { ThemeProps } from './themeProps'
import fixitIcon from '@/assets/icons/fixit.svg'
import hugoIcon from '@/assets/icons/hugo.svg'
import { orientationOptions, resultColorOptions } from '@/common'
import { ImgContext } from '@/components/ImgContext'
import Pagination from '@/components/Pagination'
import SvgIcon from '@/components/SvgIcon'
import { downloadRawImage } from '@/services/downloadRawImage'
import { getPhotos } from '@/services/unsplash'
import { useContext, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

function UnsplashCopyright() {
  const { unsplashImage } = useContext(ImgContext)
  if (!unsplashImage?.downloadLink) {
    return null
  }
  return (
    <div className="absolute bottom-2 right-2 opacity-80 download-ignore">
      <div className="group-hover:flex hidden items-center">
        <span className="text-sm text-white mx-2">Photo by</span>
        <a
          className="cursor-pointer flex items-center bg-gray-300 rounded-full text-sm"
          href={unsplashImage?.profile}
          rel="noreferrer"
          target="_blank"
        >
          <img
            alt={unsplashImage?.name}
            className="h-6 w-6 rounded-full mr-2"
            src={unsplashImage?.avatar}
          />
          <span className="pr-2">{unsplashImage?.name}</span>
        </a>
        <a
          className="text-sm text-white mx-2"
          href="https://unsplash.com/?utm_source=https://coverview.lruihao.cn&utm_medium=referral"
          rel="noreferrer"
          target="_blank"
        >
          Unsplash
        </a>
      </div>
    </div>
  )
}

function BackgroundTheme({ config }: ThemeProps) {
  const { t } = useTranslation()
  const { title, author, font, icon, customIcon } = config
  const fontBold = font !== 'font-Virgil' ? 'font-bold' : ''
  const [imageList, setImageList] = useState<BasicPhoto[]>([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const pageSize = 30
  const [loading, setLoading] = useState(false)
  const [downloading, setDownloading] = useState(false)
  const [searchText, setSearchText] = useState('setup')
  const [orientation, setOrientation] = useState<Orientation | 'all'>('all')
  const [resultColor, setResultColor] = useState<ColorId | 'all'>('all')
  const { unsplashImage, setUnsplashImage } = useContext(ImgContext)

  const searchImages = (resetPage = false) => {
    // 重置页码
    if (resetPage) {
      setPage(1)
    }
    setLoading(true)
    const query: GetPhotosOptions = {
      query: searchText,
      page,
      perPage: pageSize,
    }
    if (orientation && orientation !== 'all') {
      query.orientation = orientation
    }
    if (resultColor && resultColor !== 'all') {
      query.color = resultColor
    }
    getPhotos(query).then((response) => {
      setLoading(false)
      if (response.status !== 200) {
        return console.error('Failed to fetch images!', response.errors)
      }
      if (response.response) {
        setTotal(response.response.total)
        setImageList(response.response.results)
      }
    })
  }

  // 页码变化时重新搜索
  useEffect(() => {
    searchImages()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  const selectImage = (image: BasicPhoto) => {
    setUnsplashImage({
      url: image.urls.regular,
      name: image.user.name,
      avatar: image.user.profile_image.small,
      profile: `${image.user.links.html}?utm_source=https://coverview.lruihao.cn&utm_medium=referral`,
      downloadLink: image.links.download_location,
    })
  }

  const uploadImage = () => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = 'image/*'
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0]
      if (file) {
        setUnsplashImage({
          url: URL.createObjectURL(file),
          name: 'Custom Image',
          avatar: '',
          profile: '',
          downloadLink: '',
        })
      }
    }
    input.click()
  }

  const downloadImage = (image: BasicPhoto) => {
    setDownloading(true)
    downloadRawImage(image.urls.raw, image.id).then(() => {
      setDownloading(false)
    }).catch((error) => {
      console.error('Failed to download image!', error)
    })
  }

  return (
    <div className="theme-background overflow-y-hidden flex flex-col rounded-sm h-full">
      <div className="h-full bg-white">
        {/* 预览图片 */}
        <div className={`${unsplashImage ? 'flex' : 'hidden'} h-full relative group`}>
          <img
            alt="preview"
            className="object-cover h-full w-full"
            src={unsplashImage?.url}
          />

          <div className="backdrop-blur-xs h-full w-full bg-gray-800/60 absolute">
            <button
              type="button"
              className="group-hover:inline-block hidden absolute top-2 right-2 cursor-pointer download-ignore text-gray-800 bg-white p-2 rounded-full z-10"
              onClick={() => setUnsplashImage(null)}
            >
              <SvgIcon name="close" />
            </button>
            <div className={`${font} rounded-xl h-full p-4 flex flex-col justify-center gap-12`}>
              <h1 className={`whitespace-pre-wrap md:text-5xl text-center text-2xl text-white ${fontBold}`}>{title}</h1>
              <div className="flex flex-col items-center">
                <h2 className="text-xl font-semibold text-white">{author}</h2>
                {customIcon && (
                  <img alt="Custom Icon" className="w-10 h-10 m-2" src={customIcon} />
                )}
                {icon.value === 'hugo-fixit' && (
                  <div className="flex items-center gap-2 m-2">
                    <img alt="Hugo Icon" className="w-10 h-10 rounded-full bg-white border-2 border-white" src={hugoIcon} />
                    <span className="text-xl text-white font-black">+</span>
                    <img alt="FixIt Icon" className="w-10 h-10 rounded-full bg-white border-2 border-white" src={fixitIcon} />
                  </div>
                )}
                {icon.value !== 'custom' && icon.value !== 'hugo-fixit' && (
                  <img
                    alt={`${icon.label} Icon`}
                    className="w-10 h-10 m-2"
                    data-icon={icon.value}
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${icon.value}/${icon.value}-${icon.opts[0]}.svg`}
                  />
                )}
              </div>
            </div>
          </div>
          <UnsplashCopyright />
        </div>
        {/* 图片列表 */}
        <div className={`${unsplashImage ? 'hidden' : 'flex'} h-full flex-col p-1 md:p-4 bg-white items-center justify-around gap-1 md:gap-2 relative download-ignore`}>
          <div className="flex flex-wrap items-center justify-center md:justify-between w-full">
            <form
              className="flex rounded-full border border-gray-300/70 hover:border-gray-300 flex-grow"
              onSubmit={e => e.preventDefault()}
            >
              <select
                className="focus:outline-hidden py-1 px-2 md:px-4 rounded-l-full"
                value={orientation}
                onChange={e => setOrientation(e.target.value as Orientation)}
              >
                {orientationOptions.map(option => (
                  <option key={option} value={option}>{t(`orientation.${option}`)}</option>
                ))}
              </select>
              <select
                className="focus:outline-hidden py-1 px-2 md:px-4"
                value={resultColor}
                onChange={e => setResultColor(e.target.value as ColorId)}
              >
                {resultColorOptions.map(color => (
                  <option key={color} value={color}>{t(`resultColors.${color}`)}</option>
                ))}
              </select>
              <input
                className="focus:outline-hidden w-full py-1 md:px-4 rounded-full"
                placeholder={t('editor.searchPlaceholder')}
                type="text"
                value={searchText}
                onChange={e => setSearchText(e.target.value)}
              />
              <button
                type="submit"
                onClick={() => searchImages(true)}
                className="w-8 h-8 m-1 p-2 bg-gray-700 hover:bg-gray-800 text-white rounded-full"
              >
                <SvgIcon name="search" />
              </button>
            </form>
            <button
              type="submit"
              onClick={() => uploadImage()}
              className="w-8 h-8 m-1 p-2 bg-indigo-400 hover:bg-indigo-500 text-white rounded-full"
            >
              <SvgIcon name="upload" />
            </button>
          </div>

          {loading && (
            <div className="absolute h-full inset-0 flex items-center justify-center bg-white/50 z-10">
              <SvgIcon name="loading" className="text-indigo-400 animate-spin text-6xl" />
            </div>
          )}

          <div className="overflow-y-scroll overflow-x-hidden h-96 justify-center flex flex-wrap w-full">
            {imageList.map((image) => {
              return (
                <div className="group w-1/3 h-40 cursor-pointer relative" key={image.id}>
                  <img
                    alt={image.alt_description!}
                    className="w-full h-full object-cover p-1 rounded-xl"
                    src={image.urls.small}
                    onClick={() => selectImage(image)}
                  />
                  <span className="group-hover:inline hidden absolute top-1/2 left-1/2 -translate-1/2 font-Inter font-semibold text-sm text-white mix-blend-difference pointer-events-none">
                    {t('editor.selectImgTips')}
                  </span>
                  <button
                    type="button"
                    className="group-hover:inline hidden border p-1 bg-gray-700 hover:bg-gray-800 text-white rounded-lg absolute bottom-2 right-2 text-lg"
                    disabled={downloading}
                    onClick={() => downloadImage(image)}
                  >
                    <SvgIcon name="download" />
                  </button>
                </div>
              )
            })}
            {imageList.length === 0 && (
              <div className="text-sm text-gray-400 w-full h-60 flex flex-col items-center justify-center gap-2">
                <SvgIcon name="empty" className="text-6xl md:text-8xl" />
                <span>{t('editor.imageListEmpty')}</span>
              </div>
            )}
            <Pagination
              className="sticky bottom-0"
              page={page}
              pageSize={pageSize}
              pagerCount={5}
              pagination={page => setPage(page)}
              total={total}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BackgroundTheme
