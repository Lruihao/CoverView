# CoverView

👉 [简体中文说明](README.md) | English README

[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/Lruihao/CoverView)

> This project is based on the original [CoverView](https://github.com/rutikwankhade/CoverView).

Creating cover images for your blogs is now super easy.

![cover_852562](https://github.com/Lruihao/CoverView/assets/33419593/f61407eb-fcba-4e78-8ee1-abd633f4c5a0)

## 💥 Change Notice

Moved the original CoverView to my repositories since 2024-03-28, and made the following changes and enhancements:

- Fixed the problem that images with patterns background cannot be downloaded
- Fixed the problem of being unable to download and upload images with SVG format icons
- Fixed mobile style disorder
- Fixed `Reset All` button function abnormality
- Added ESLint support
- Added I18n support
- Enhanced Unsplash image search feature
- Added download image format selection (PNG/JPEG/SVG/Blob), and support JPEG image quality adjustment
- Optimize image download speed
- Optimize Devicons to be displayed as multi-color SVG icons
- Added more font and platform support
- Unify the size of downloaded images for different themes
- And more ...

## ⚡ Features

- 🚀 super fast and easy to use
- 🌈 7 different themes, multiple fonts
- 🌠 100+ dev icons with option to upload custom icon
- ✨ 15+ different background patterns
- 💾 Cover size based on blogging platform or frequently used sizes
  - [Hashnode](https://hashnode.com/)
  - [Dev.to](https://dev.to/)
  - [Hugo FixIt](https://github.com/hugo-fixit/FixIt)
  - [稀土掘金](https://juejin.cn/)

## 👩‍💻 Developing

1. Clone the project and install dependencies:

    ```shell
    git clone https://github.com/Lruihao/CoverView.git
    cd CoverView/
    pnpm i
    ```

2. Get an access key from [Unsplash API](https://unsplash.com/developers).
3. Add the `REACT_APP_UNSPLASH_ACCESS_KEY` environment variable in the `.env.local` file.

    ```bash
    # https://unsplash.com/ Access Key
    REACT_APP_UNSPLASH_ACCESS_KEY="your_access_key_here"
    ```

4. Run the following command to start the project:

    ```shell
    pnpm dev
    ```

## 👇 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

1. Fork it (<https://github.com/Lruihao/CoverView/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

## 🙏 Acknowledgments

- [Rutik Wankhade](https://github.com/rutikwankhade) (original CoverView)
- [dom-to-image-more](https://github.com/1904labs/dom-to-image-more)
- [Hero Patterns](https://www.heropatterns.com/)
- [Devicons](https://github.com/devicons/devicon)
- [Font Virgil](https://github.com/excalidraw/virgil)
- [Font MMT](https://github.com/Lruihao/MMT)

Don't forget to leave a ⭐ if you found this useful.
