import React from "react";
import CommentContainer from "../CommentContainer/CommentContainer";

// shows video player and video details (title and description)

const VideoDetail = ({ video }) => {
  console.log(video);
  if (!video) {
    return <div>Loading...</div>;
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe title={video.snippet.title} src={videoSrc} />
      </div>
      <div className="ui raised segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
      <div>
        <CommentContainer selectedVideoId={video.id.videoId} />
      </div>
    </div>
  );
};

export default VideoDetail;
