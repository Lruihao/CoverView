import { createApi } from 'unsplash-js'

// https://github.com/unsplash/unsplash-js
export const unsplash = createApi({
  accessKey: import.meta.env.REACT_APP_UNSPLASH_ACCESS_KEY,
})

export type GetPhotosOptions = Parameters<typeof unsplash.search.getPhotos>[0]

export type GetPhotosResult = Awaited<ReturnType<typeof unsplash.search.getPhotos>>

export type BasicPhoto = NonNullable<GetPhotosResult['response']>['results'][number]

/**
 * search photos
 * @param options https://unsplash.com/documentation#search-photos
 */
export async function getPhotos(options: GetPhotosOptions): Promise<GetPhotosResult> {
  return await unsplash.search.getPhotos(options)
}

export type TrackDownloadOptions = Parameters<typeof unsplash.photos.trackDownload>[0]

export type TrackDownloadResult = Awaited<ReturnType<typeof unsplash.photos.trackDownload>>

/**
 * download a photo
 * @param options { downloadLocation: 'unsplash_image_download_link' }
 */
export async function trackDownload(options: TrackDownloadOptions): Promise<TrackDownloadResult> {
  return await unsplash.photos.trackDownload(options)
}
