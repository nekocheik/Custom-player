(()=>{
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

    const videoPlayPause = (button, video) => {
      if ( video.paused ) {
        video.play()
      } else {
        video.pause()
      }
      setGoodStateButtonPlay( button, video )
    }

    const createPlayPause = (container, video) => {
      let buttonPlaypause = document.createElement('span')
      buttonPlaypause.className = "button__play__pause"
      setGoodStateButtonPlay( buttonPlaypause, video )
      buttonPlaypause.addEventListener('click', ()=> {
        videoPlayPause(buttonPlaypause, video)
      })
      container.appendChild(buttonPlaypause)
    }

    const createElementPlayer = (container, video) => {
      createPlayPause(container, video)
    }

    const createVideoPlayer = (video) => {
      const containerVideo = document.createElement("div")
      containerVideo.className = "container__video"
      containerVideo.prepend(video)
      containerVideos.appendChild(containerVideo)
      createElementPlayer(containerVideo, video)
    }

    allVideo.forEach(( video )=>{
      createVideoPlayer(video)
    })
  })
})()
