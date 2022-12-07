import React from 'react'
import "./VideoFooter.css"
import MusicNoteIcon from '@mui/icons-material/MusicNote';
function VideoFooter({channel,description,song}) {
  return (
    <div className='videoFooter'>
       <div className="videoFooter__text">
            <h3>@ {channel}</h3>
            <p>{description}</p>
            <div className='videoFooter__ticker'>
              <MusicNoteIcon className="videoFooter__icon"/>
              <div className='videoFooter__slide'>
              <marquee>{song}</marquee>
              </div>
            </div>
            <img className="videoFooter__record" src="https://static.thenounproject.com/png/934821-200.png" alt="video footer" />
       </div>
    </div>
  )
}

export default VideoFooter