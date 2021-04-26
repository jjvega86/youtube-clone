import React from "react";
import "./CommentList.css";
import Comment from "../Comment/Comment";

const CommentList = ({ comments }) => {
  let renderedComments = comments.map((comment) => {
    return (
      <Comment
        key={comment.commentId}
        author={comment.author}
        date={comment.date}
        text={comment.text}
      />
    );
  });
  return renderedComments.length > 0 ? (
    <div className="ui comments">
      <h3 className="ui dividing header">Comments</h3>
      {renderedComments}
    </div>
  ) : (
    <p>No Comments!</p>
  );
};

export default CommentList;
