import React from "react";

const VideoCard = ({ info }) => {
  if (!info || !info.snippet || !info.statistics) return null;

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-4 w-56 shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300">
      <img
        className="rounded-lg w-full object-cover"
        src={thumbnails?.medium?.url}
        alt="thumbnail"
      />
      <ul className="mt-2 space-y-1">
        <li className="font-semibold text-sm line-clamp-2">{title}</li>
        <li className="text-gray-600 text-sm">{channelTitle}</li>
        <li className="text-gray-500 text-sm">
          {parseInt(statistics?.viewCount).toLocaleString()} views
        </li>
      </ul>
    </div>
  );
};

export default VideoCard;
