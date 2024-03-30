import React, { useState, useEffect, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import unsplash from '../../utils/unsplashConfig'
import { ImgContext } from '../../utils/ImgContext'
import hugoIcon from '../../assets/icons/hugo.svg'
import fixitIcon from '../../assets/icons/fixit.svg'

const BackgroundTheme = ({ config }) => {
  const { t } = useTranslation()
  const { title, author, font, icon, customIcon, platform, bgColor } = config

  // const [image, setImage] = useState({})

  const [imageList, setImageList] = useState([])
  const [searchText, setSearchText] = useState('dev')

  const { unsplashImage, setUnsplashImage } = useContext(ImgContext)

  const searchImages = () => {
    unsplash.search
      .getPhotos({
        query: searchText,
        page: 1,
        per_page: 30,
        // orientation:'portrait'
      })
      .then((response) => {
        // console.log(response.response.results);
        setImageList(response.response.results)
      })
  }

  useEffect(() => {
    unsplash.search
      .getPhotos({
        query: 'setup',
        page: 1,
        per_page: 30,
      })
      .then((response) => {
        // console.log(response.response.results);
        setImageList(response.response.results)
      })
  }, [])

  const selectImage = (image) => {
    setUnsplashImage({
      url: image.urls.regular,
      name: image.user.name,
      avatar: image.user.profile_image.small,
      profile: `${image.user.links.html}?utm_source=https://coverview.lruihao.cn&utm_medium=referral`,
      downloadLink: image.links.download_location,
    })
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    searchImages(searchText)
  }

  return (
    <div className={`overflow-y-hidden flex flex-col rounded ${platform}`} style={{ backgroundColor: bgColor }}>
      <div className="h-full bg-white">
        {unsplashImage ? (
          <div className="h-full relative flex group">
            <img
              alt="preview"
              className="object-cover h-full w-full"
              src={unsplashImage.url && unsplashImage.url}
            />

            <div className="backdrop-blur-sm h-full bg-gray-800/60 absolute">
              <button className="absolute top-2 right-2 cursor-pointer" onClick={() => setUnsplashImage('')}>
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
                <h1 className="md:text-5xl text-center text-2xl font-bold text-white">{title}</h1>
                <div className="flex flex-col items-center">
                  <h2 className="text-xl font-semibold text-white">{author}</h2>
                  {customIcon && !icon.value ? (
                    <img alt="Custom Icon" className="w-10 h-10 m-2 rounded-full bg-white border-2 border-white" src={customIcon} />
                  ) : (
                    icon.value === 'hugo-fixit' ? (
                      <div className="flex items-center gap-2 m-2">
                        <img alt="Hugo Icon" className="w-10 h-10 rounded-full bg-white border-2 border-white" src={hugoIcon} />
                        <span className="text-xl text-white font-black">+</span>
                        <img alt="FixIt Icon" className="w-10 h-10 rounded-full bg-white border-2 border-white" src={fixitIcon} />
                      </div>
                    ) : (
                      <div className="w-10 h-10 m-2 flex items-center justify-center">
                        <i className={`devicon-${icon.value}-plain text-white dev-icon text-4xl`} />
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            <div className="absolute bottom-2 right-2 opacity-80">
              <div className=" group-hover:flex hidden items-center">
                <span className="text-sm text-white mx-2">Photo by</span>
                <a
                  className="cursor-pointer flex items-center bg-gray-300 rounded-full text-sm"
                  href={unsplashImage.profile}
                  rel="noreferrer"
                  target="_blank"
                >
                  <img
                    alt={unsplashImage.name}
                    className="h-6 w-6 rounded-full mr-2"
                    src={unsplashImage.avatar && unsplashImage.avatar}
                  />
                  <span className="pr-2">{unsplashImage.name}</span>
                </a>
                <a className="text-sm text-white mx-2" href="https://unsplash.com/?utm_source=https://coverview.lruihao.cn&utm_medium=referral">Unsplash</a>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-full flex flex-col p-4 bg-white items-center justify-around">
            <div className="flex items-center justify-between w-full px-6">
              <div className="text-lg font-semibold text-gray-700">{t('editor.selectImgTips')}</div>
              <form
                className="flex bg-gray-50 rounded-full border"
                onSubmit={(e) => handleSearchSubmit(e)}
              >
                <input
                  className="focus:outline-none w-full text-lg bg-gray-50 p-1 px-4 rounded-full border border-gray-50"
                  placeholder="Search image"
                  type="text"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />

                <button type="submit" onClick={() => searchImages(searchText)}>
                  <svg
                    className="w-8 h-8 ml-auto m-1 p-2 bg-gray-700 hover:bg-gray-800 text-white rounded-full"
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

            <div className="overflow-y-scroll overflow-x-hidden h-96 justify-center flex flex-wrap">
              {imageList.map((image) => {
                return (
                  <img
                    alt={image.alt_description}
                    className="rounded-xl p-1 cursor-pointer w-1/3 object-cover h-40"
                    key={image.id}
                    src={image.urls.regular}
                    onClick={() => selectImage(image)}
                  />
                )
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default BackgroundTheme
