import React, { useState, useEffect, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { getPhotos } from '../../utils/unsplashConfig'
import { ImgContext } from '../../utils/ImgContext'
import { downloadRawImage } from '../../utils'
import hugoIcon from '../../assets/icons/hugo.svg'
import fixitIcon from '../../assets/icons/fixit.svg'
import emptyImg from '../../assets/images/empty.svg'
import Pagination from '../Pagination'

const BackgroundTheme = ({ config }) => {
  const { t } = useTranslation()
  const { title, author, font, icon, customIcon } = config
  const fontBold = font !== 'font-Virgil' ? 'font-bold' : ''
  const [imageList, setImageList] = useState([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const pageSize = 30
  const [loading, setLoading] = useState(false)
  const [downloading, setDownloading] = useState(false)
  const [searchText, setSearchText] = useState('setup')
  const [orientation, setOrientation] = useState('all')
  const [resultColor, setResultColor] = useState('all')
  const { unsplashImage, setUnsplashImage } = useContext(ImgContext)
  const orientationOptions = [
    'all',
    'landscape',
    'portrait',
    'squarish',
  ]
  const resultColorOptions = [
    'all',
    'black_and_white',
    'black',
    'white',
    'yellow',
    'orange',
    'red',
    'purple',
    'magenta',
    'green',
    'teal',
    'blue',
  ]

  const searchImages = (resetPage=false) => {
    // 重置页码
    if (resetPage) {
      setPage(1)
    }
    setLoading(true)
    const query = {
      query: searchText,
      page: page,
      perPage: pageSize,
      orientation: orientation,
      color: resultColor,
    }
    orientation === 'all' && delete query.orientation
    resultColor === 'all' && delete query.color
    getPhotos(query).then((response) => {
      setLoading(false)
      if (response.status !== 200) {
        return console.error('Failed to fetch images!', response.errors)
      }
      setTotal(response.response.total)
      setImageList(response.response.results)
    })
  }

  // 页码变化时重新搜索
  useEffect(() => {
    searchImages()
  }, [page])

  const selectImage = (image) => {
    setUnsplashImage({
      url: image.urls.regular,
      name: image.user.name,
      avatar: image.user.profile_image.small,
      profile: `${image.user.links.html}?utm_source=https://coverview.lruihao.cn&utm_medium=referral`,
      downloadLink: image.links.download_location,
    })
  }

  const downloadImage = (image) => {
    setDownloading(true)
    downloadRawImage(image).then(() => {
      setDownloading(false)
    }).catch((error) => {
      console.error('Failed to download image!', error)
    })
  }

  return (
    <div className="theme-background overflow-y-hidden flex flex-col rounded h-full">
      <div className="h-full bg-white">
        {/* 预览图片 */}
        <div className={`${unsplashImage ? 'flex': 'hidden'} h-full relative group`}>
          <img
            alt="preview"
            className="object-cover h-full w-full"
            src={unsplashImage?.url}
          />

          <div className="backdrop-blur-sm h-full w-full bg-gray-800/60 absolute">
            <button className="absolute top-2 right-2 cursor-pointer download-ignore" onClick={() => setUnsplashImage('')}>
              <svg
                className="group-hover:inline-block hidden w-8 h-8 text-gray-800 bg-white p-2 rounded-full z-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 18L18 6M6 6l12 12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>
            <div className={`${font} rounded-xl h-full p-4 flex flex-col justify-center gap-12`}>
              <h1 className={`whitespace-pre-wrap md:text-5xl text-center text-2xl text-white ${fontBold}`}>{title}</h1>
              <div className="flex flex-col items-center">
                <h2 className="text-xl font-semibold text-white">{author}</h2>
                {customIcon && (
                  <img alt="Custom Icon" className="w-10 h-10 m-2 rounded-full bg-white border-2 border-white" src={customIcon} />
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
              >Unsplash</a>
            </div>
          </div>
        </div>
        {/* 图片列表 */}
        <div className={`${unsplashImage ? 'hidden' : 'flex'} h-full flex-col p-1 md:p-4 bg-white items-center justify-around gap-1 md:gap-2 relative download-ignore`}>
          <div className="flex flex-wrap items-center justify-center md:justify-between w-full px-2">
            <div className="text-lg font-semibold text-gray-700">{t('editor.selectImgTips')} 👇</div>
            <form
              className="flex bg-gray-50 rounded-full border"
              onSubmit={(e) => e.preventDefault()}
            >
              <select
                className="focus:outline-none bg-gray-50 py-1 px-2 md:px-4 rounded-l-full"
                value={orientation}
                onChange={(e) => setOrientation(e.target.value)}
              >
                {orientationOptions.map((option) => (
                  <option key={option} value={option}>{t(`orientation.${option}`)}</option>
                ))}
              </select>
              <select
                className="focus:outline-none bg-gray-50 py-1 px-2 md:px-4 w-24"
                value={resultColor}
                onChange={(e) => setResultColor(e.target.value)}
              >
                {resultColorOptions.map((color) => (
                  <option key={color} value={color}>{t(`resultColors.${color}`)}</option>
                ))}
              </select>
              <input
                className="focus:outline-none w-full text-lg bg-gray-50 py-1 px-2 md:px-4 rounded-full border border-gray-50"
                placeholder={t('editor.searchPlaceholder')}
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />

              <button type="submit" onClick={() => searchImages(true)}>
                <svg
                  className="w-8 h-8 m-1 p-2 bg-gray-700 hover:bg-gray-800 text-white rounded-full"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </form>
          </div>
          {loading && (
            <div className="absolute h-full inset-0 flex items-center justify-center bg-white/50 z-10">
              <svg
                className="w-14 h-14 text-indigo-400 animate-spin"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z"
                />
              </svg>
            </div>
          )}

          <div className="overflow-y-scroll overflow-x-hidden h-96 justify-center flex flex-wrap w-full">
            {imageList.map((image) => {
              return (
                <div className="unsplash-image-container w-1/3 h-40 cursor-pointer relative" key={image.id}>
                  <img
                    alt={image.alt_description}
                    className="w-full h-full object-cover p-1 rounded-xl"
                    src={image.urls.small}
                    onClick={() => selectImage(image)}
                  />
                  <button
                    className="hidden border p-1 bg-gray-700 hover:bg-gray-800 text-white rounded-lg absolute bottom-2 right-2"
                    disabled={downloading}
                    onClick={() => downloadImage(image)}
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    ><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/></svg>
                  </button>
                </div>
              )
            })}
            {imageList.length === 0 && (
              <div className="text-sm text-gray-400 w-full h-60 flex flex-col items-center justify-center gap-2">
                <img alt="empty" className="w-16 h-16 md:w-24 md:h-24" src={emptyImg} />
                <span>{t('editor.imageListEmpty')}</span>
              </div>
            )}
            <Pagination
              className="sticky bottom-0"
              page={page}
              pageSize={pageSize}
              pagerCount={5}
              pagination={(page) => setPage(page)}
              total={total}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BackgroundTheme
