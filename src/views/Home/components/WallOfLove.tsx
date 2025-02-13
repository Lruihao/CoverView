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
    <div className="md:h-[800px] h-screen w-full">
      <button type="button" className="flex mx-auto mb-4 hover:translate-x-2 duration-300 bg-blue-400 rounded-full px-6 text-white text-xl font-Inter font-semibold p-2">
        <a href={`https://twitter.com/intent/tweet?text=${tweetText}`} rel="noreferrer" target="_blank">
          {t('home.shareOnTwitter')}
          {' '}
          👏
        </a>
      </button>
      <iframe
        className="md:w-9/12 h-full py-4 px-6 mx-auto border-none"
        width="100%"
        height="100%"
        id="senja-frame-902012ea"
        src="https://widget.senja.io/widget/902012ea-9b49-433a-96df-5cb43fd9a648"
        title="wall of love"
      />
    </div>
  )
}

export default WallOfLove
