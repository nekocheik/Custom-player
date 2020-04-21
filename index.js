(()=>{
  let memo = 0 
  document.addEventListener(('mouseover'), ()=> {
    memo++
    if ( memo > 1) {
      return
    }
    const containersVideos = document.querySelectorAll('.videos')  
  containersVideos.forEach((containerVideos)=> {
    const allVideo = containerVideos.querySelectorAll("video")

    const setGoodStateButtonPlay = (button, video) => {
      button.className = "button__play__pause"
      if (video.paused) {
        button.classList.add("state__pause")
      } else {
        button.classList.add("state__play")
      } 
    }

    const setGoodStateMute= (button, video) => {
      button.className = "button__mute"
      if (video.muted) {
        button.classList.add("mute")
      }
    }
    
    const videoPlayPause = (button, video) => {
      if ( video.paused ) {
        video.play()
      } else {
        video.pause()
      }
      setGoodStateButtonPlay( button, video )
    }

    const createElementDom = (elementName = "span" , className, callBack = ()=> { }) => {
      let element = document.createElement(elementName)
      element.className = className;
      element.addEventListener('click', function (){
        callBack(element)
      })

      return element
    }

    const createMutButton = (container, video) => {
      let btnMute = createElementDom('span',"button__mute", (element) => {
        video.muted = video.muted === true ? false : true
        setGoodStateMute(element , video )
      })
      setGoodStateMute(btnMute, video )
      container.appendChild(btnMute)
    }

    const createPlayPause = (container, video) => {
      let btnPlaypause = createElementDom('span',"button__play__pause", (button) => {
        videoPlayPause(button, video)
      })
      setGoodStateButtonPlay(btnPlaypause, video )
      container.appendChild(btnPlaypause)
    }

    const createElementPlayer = (container, video) => {
      createPlayPause(container, video),
      createMutButton(container, video)
    }

    const createVideoPlayer = (video) => {
      const containerVideo = createElementDom( "div","container__video");
      containerVideo.prepend(video)
      containerVideos.appendChild(containerVideo)
      createElementPlayer(containerVideo, video)
    }

    allVideo.forEach(( video )=>{
      createVideoPlayer(video)
    })

  })
  })

})()