import { createApi } from 'unsplash-js'

// https://github.com/unsplash/unsplash-js
const unsplash = createApi({
  accessKey: process.env.REACT_APP_UNSPLASH_ACCESS_KEY,
})

/**
 * 搜索图片
 * @param {Object} options https://unsplash.com/documentation#search-photos
 * @returns {Promise}
 */
const getPhotos = async (options) => {
  return await unsplash.search.getPhotos(options)
}

export default unsplash

export { getPhotos }
