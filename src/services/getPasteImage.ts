/**
 * 获取剪切板内容里的图片
 * @param {Event} event
 */
export async function getPasteImage(event: ClipboardEvent): Promise<string> {
  return await new Promise((resolve, reject) => {
    const items = event.clipboardData?.items
    if (!items)
      return reject(new Error('No items found in clipboard'))
    for (const element of items) {
      if (element.type.includes('image')) {
        const blob = element.getAsFile()
        if (blob) {
          return resolve(URL.createObjectURL(blob))
        }
      }
    }
    reject(new Error('No image found in clipboard'))
  })
}
