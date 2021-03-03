import React from 'react';

// shows video player and video details (title and description)

const VideoDetail = ({video}) => {
    return ( <div>{video.snippet.title}</div> );
}
 
export default VideoDetail;