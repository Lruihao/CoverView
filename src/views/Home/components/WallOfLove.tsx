/* eslint-disable react-dom/no-missing-iframe-sandbox */
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

function WallOfLove() {
  useEffect(() => {
    const script = document.createElement('script')
    script.setAttribute('type', 'text/javascript')
    script.setAttribute('src', 'https://widget.senja.io/js/iframeResizer.min.js')
    document.body.appendChild(script)
  })
  const { t } = useTranslation()
  const tweetText = encodeURIComponent(t('home.tweetText'))

  return (
    <div className="w-full bg-blue-50 pt-10 pb-20 px-6">
      <button type="button" className="flex mx-auto my-6 hover:translate-x-2 duration-300 bg-blue-400 rounded-full px-6 text-white text-xl font-Inter font-semibold p-2">
        <a href={`https://twitter.com/intent/tweet?text=${tweetText}`} rel="noreferrer" target="_blank">
          {t('home.shareOnTwitter')}
          {' '}
          👏
        </a>
      </button>
      <div className="h-[700px]">
        <iframe
          className="md:w-9/12 h-full border-none m-auto"
          width="100%"
          height="100%"
          id="senja-frame-902012ea"
          src="https://widget.senja.io/widget/902012ea-9b49-433a-96df-5cb43fd9a648"
          title="wall of love"
        />
      </div>
    </div>
  )
}

export default WallOfLove
