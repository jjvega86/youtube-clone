import React from "react";

const Comment = ({ commentId, author, date, text, deleteComment }) => {
  return (
    <div className="comment">
      {/*<a className="avatar"></a>*/}
      <div className="content">
        <p className="author">{author}</p>
        <div className="metadata">
          <span className="date">{date}</span>
        </div>
        <div className="text">{text}</div>
        <div className="actions">
          <button className="ui blue submit icon button">Reply</button>
          <button
            className="ui blue submit icon button"
            onClick={() => deleteComment(commentId)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comment;
