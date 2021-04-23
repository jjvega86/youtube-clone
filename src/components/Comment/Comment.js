import React from "react";
import "./Comment.css";

const Comment = ({author, date, text}) => {
    {/* Need to pass props values down from CommentList in renderedComments */}
  return (
    <div className="comment">
      <a className="avatar"></a>
      <div className="content">
        <a className="author">{author}</a>
        <div className="metadata">
          <span className="date">{date}</span>
        </div>
        <div className="text">{text}</div>
        <div className="actions">
          <a className="reply">Reply</a>
        </div>
      </div>
    </div>
  );
};

export default Comment;
