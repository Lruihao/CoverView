import type { DownloadFormat } from '@/types'
import domtoimage, { type Options } from 'dom-to-image-more'

export type ToImageOptions = Options

export async function toImage(node: HTMLElement, format: DownloadFormat, options?: Options) {
  const method = `to${format[0].toUpperCase()}${format.slice(1)}` as keyof typeof domtoimage
  return await domtoimage[method](node, options)
}
