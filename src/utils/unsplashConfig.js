import { createApi } from 'unsplash-js'

// https://github.com/unsplash/unsplash-js
const unsplash = createApi({
  accessKey: process.env.REACT_APP_UNSPLASH_ACCESS_KEY,
})

/**
 * search photos
 * @param {Object} options https://unsplash.com/documentation#search-photos
 * @returns {Promise}
 */
const getPhotos = async (options) => {
  return await unsplash.search.getPhotos(options)
}

/**
 * download a photo
 * @param {Object} options { downloadLocation: 'unsplash_image_download_link' }
 * @returns {Promise}
 */
const trackDownload = async (options) => {
  return await unsplash.photos.trackDownload(options)
}

export {
  unsplash,
  getPhotos,
  trackDownload,
}
