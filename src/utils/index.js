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

