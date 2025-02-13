/* eslint-disable react-dom/no-missing-iframe-sandbox */
import { useEffect } from 'react'

function WallOfLove() {
  useEffect(() => {
    const script = document.createElement('script')
    script.setAttribute('type', 'text/javascript')
    script.setAttribute('src', 'https://widget.senja.io/js/iframeResizer.min.js')
    document.body.appendChild(script)
  })

  return (
    <div>
      <iframe
        className="w-9/12 h-screen  mx-auto border-none overflow-hidden"
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
