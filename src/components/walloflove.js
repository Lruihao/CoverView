import React, { useEffect } from 'react'

function WallOfLove() {
  useEffect(() => {
    const script = document.createElement('script')
    script.setAttribute('type', 'text/javascript')
    script.setAttribute('src', 'https://widget.senja.io/js/iframeResizer.min.js')

    // window.iFrameResize(
    //     { log: false, checkOrigin: false },
    //     '#senja-frame-902012ea');

    const frame = document.getElementById('senja-frame-902012ea')
    frame.setAttribute('src', 'https://widget.senja.io/widget/902012ea-9b49-433a-96df-5cb43fd9a648')
    document.body.appendChild(script)
  })

  return (
    <div>
      <iframe
        className="w-9/12 h-screen  mx-auto"
        data-src="https://widget.senja.io/widget/902012ea-9b49-433a-96df-5cb43fd9a648"
        frameBorder="0"
        height="100%"
        id="senja-frame-902012ea"
        scrolling="no"
        src=""
        title="wall of love"
        width="100%"
      />
    </div>
  )
}

export default WallOfLove
