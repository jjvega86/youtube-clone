import React from "react";
import "./CommentList.css";
import Comment from "../Comment/Comment";

const CommentList = ({ comments, deleteComment }) => {
  let renderedComments = comments.map((comment) => {
    return (
      <Comment
        key={comment.commentId}
        commentId={comment.commentId}
        author={comment.author}
        date={comment.date}
        text={comment.text}
        deleteComment={deleteComment}
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
