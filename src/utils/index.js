/**
 * 获取剪切板内容里的图片
 * @param {Event} event
 */
export async function getPasteImage(event) {
  try {
    return await new Promise((resolve, reject) => {
      const items = event.clipboardData.items
      for (const element of items) {
        if (element.type.indexOf('image') !== -1) {
          const blob = element.getAsFile()
          resolve(URL.createObjectURL(blob))
        }
      }
      // reject(new Error('No image found in clipboard'))
    })
  } catch (error) {
    reject(error)
  }
}

/**
 * 下载 unsplash 原图
 * @param {*} image unsplash image object
 * @returns {Promise}
 */
export function downloadRawImage(image) {
  return new Promise((resolve, reject) => {
    fetch(image.urls.raw)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob)
        const link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a')
        link.href = url
        link.download = `${image.slug}.jpeg`
        link.click()
        resolve()
        URL.revokeObjectURL(url)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

