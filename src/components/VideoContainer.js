import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
    const[Videos,setVideos] = useState([]);
    useEffect(
        () => {
                 getVideos();
        }, []
    )

    const getVideos = async() =>
    {
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const json = await data.json();
        if (json.items) {
          setVideos(json.items); 
        } else {
          console.error("No videos found in API response.");
        }
    }
  return (
    <div className="flex flex-wrap">
        {Videos.map((video) => {
           return <Link to={"/watch?v="+video.id}><VideoCard key ={video.id} info ={video}/> </Link>
        })}
        
    </div>
  )
}

export default VideoContainer