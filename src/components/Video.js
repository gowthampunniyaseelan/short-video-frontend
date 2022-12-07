import React,{useRef,useState} from 'react'
import VideoFooter from './VideoFooter';
import "./Video.css"
import VideoSidebar from './VideoSidebar';
function Video({url,poster,channel,description,song,likes,shares,messages}) {
  const [playing,setPlaying] = useState(false);
  var videoRef = useRef(null);
  function handlepressVideo(){
    if(playing){
      videoRef.current.pause();
      setPlaying(false)
    }else{
      videoRef.current.play();
      setPlaying(true)
    }
    const video = document.querySelector(".video__player")
    video.muted = false
  }
 
  return (
    <div className='video'>
    <video
    muted
    autoPlay
    src={url}
    className='video__player'
    loop 
    // poster={poster}
    ref={videoRef}
    onClick={handlepressVideo}
    >
    </video>
    <VideoFooter channel={channel} description={description} song={song}/>
    <VideoSidebar likes={likes} shares={shares} messages={messages}/>
    </div>
  )
}

export default Video