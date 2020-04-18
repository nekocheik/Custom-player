(()=>{
  const containersVideos = document.querySelectorAll('.videos')
  containersVideos.forEach((containerVideos)=> {
    const allVideo = containerVideos.querySelectorAll("video")

    const videoPlayPause = (button, video) => {
      if ( video.paused ) {
        video.play()
      } else {
        video.pause()
      }
    }

    const createPlayPause = (container, video) => {
      let buttonPlaypause = document.createElement('span')
      buttonPlaypause.className = "button__play__pause"
      buttonPlaypause.addEventListener('click', ()=> {
        videoPlayPause(buttonPlaypause, video)
      })
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
