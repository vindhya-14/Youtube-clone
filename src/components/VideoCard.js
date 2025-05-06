import React from 'react'

const VideoCard = ({info}) => {
    if (!info || !info.snippet || !info.statistics) return null;
    console.log(info);
    const {snippet,statistics} = info;
    const {channelTitle,title,thumbnails} = snippet;
  return (
    <div className='p-2 m-4 w-56 shadow-lg'>
        <img className= "rounded-lg" src={thumbnails.medium.url} alt="thumbnail" />
           <ul>
            <li>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} views</li>
           </ul>
    </div>
  )
}

export default VideoCard