/**
 * 下载 unsplash 原图
 * @param image unsplash image object
 */
export async function downloadRawImage(image: string, slug: string): Promise<void> {
  // image.urls.raw
  const blob = await fetch(image).then(res => res.blob())
  const url = window.URL.createObjectURL(blob)
  const link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a') as HTMLAnchorElement
  link.href = url
  link.download = `${slug}.jpeg`
  link.click()
  URL.revokeObjectURL(url)
}
