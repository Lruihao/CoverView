declare module 'dom-to-image-more' {

  export interface DomToImage {
    toSvg: (node: Node, options?: Options) => Promise<string>
    toPng: (node: Node, options?: Options) => Promise<string>
    toJpeg: (node: Node, options?: Options) => Promise<string>
    toBlob: (node: Node, options?: Options) => Promise<Blob>
    toPixelData: (node: Node, options?: Options) => Promise<Uint8ClampedArray>
  }

  export interface Options {
    filter?: ((node: Node) => boolean) | undefined
    bgcolor?: string | undefined
    width?: number | undefined
    height?: number | undefined
    style?: Record<string, string> | undefined
    quality?: number | undefined
    imagePlaceholder?: string | undefined
    cacheBust?: boolean | undefined
    copyDefaultStyles?: boolean | undefined
  }

  export const DomToImage: DomToImage

  type DomToImage_ = DomToImage
  type Options_ = Options

  export default DomToImage

  declare global {
    namespace DomToImage {
      type Options = Options_
      type DomToImage = DomToImage_
    }

    const DomToImage: DomToImage.DomToImage
  }
}
