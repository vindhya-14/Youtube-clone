import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { GOOGLE_API_KEY } from "../utils/constants";
import VideoContainer from "./VideoContainer";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const videoId = searchParams.get("v");

  useEffect(() => {
    dispatch(closeMenu());

    const fetchComments = async () => {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&key=${GOOGLE_API_KEY}`
      );
      const data = await response.json();
      setComments(data.items || []);
    };

    if (videoId) {
      fetchComments();
    }
  }, [videoId, dispatch]);

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (newComment.trim() === "") return;

    setComments([
      ...comments,
      {
        snippet: {
          topLevelComment: {
            snippet: {
              textDisplay: newComment,
              authorDisplayName: "You", // Temporary dummy name
            },
          },
        },
      },
    ]);
    setNewComment("");
  };

  return (
    <div className="max-w-screen-xl mx-auto p-4 flex flex-col md:flex-row gap-6">
      
      <div className="flex-1">
        <div className="mb-6">
          <iframe
            className="w-full h-96 rounded-lg shadow-lg"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        <div className="comments-section mt-6">
          <h3 className="text-2xl font-semibold mb-4">Comments</h3>
          <div className="comments-list mb-4">
            {comments.length > 0 ? (
              comments.map((comment, index) => (
                <div
                  key={index}
                  className="comment mb-4 p-4 border-b border-gray-200"
                >
                  <p className="text-lg">
                    {comment.snippet.topLevelComment.snippet.textDisplay}
                  </p>
                  <small className="text-sm text-gray-500">
                    {comment.snippet.topLevelComment.snippet.authorDisplayName}
                  </small>
                </div>
              ))
            ) : (
              <p>No comments yet</p>
            )}
          </div>

          <form onSubmit={handleSubmitComment}>
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Write a comment..."
              rows="4"
              className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Add Comment
            </button>
          </form>
        </div>
      </div>

    
      <div className="w-full md:w-1/3">
        <VideoContainer />
      </div>
    </div>
  );
};

export default WatchPage;
