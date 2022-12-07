import './App.css';
import Video from './components/Video';
import { useState,useEffect } from 'react';
import axios from './components/axios';
function App() {
  const [videos,setVideos] = useState([]);
  useEffect(()=>{
  async function fetchData(){
    const res = await axios.get("/v2/posts")
    setVideos(res.data)
    return res
  }
  fetchData()
  },[])
  console.log(videos);
  return (
    <div className="app">
      <div className='app__videos'>
        {videos.map(({url,poster,channel,description,song,likes,shares,messages})=>(
          <Video
            key={url}
            url={url}
            poster={poster}
            channel={channel}
            description={description}
            song={song}
            likes={likes}
            shares={shares}
            messages={messages}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
