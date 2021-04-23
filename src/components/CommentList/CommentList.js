import React from "react";
import "./CommentList.css";
import Comment from "../Comment/Comment";

const CommentList = ({ comments }) => {
  {
    /* Need to pass this down as props from a stateful variable that is populated on GET request to API */
  }
  let renderedComments = comments.map((comment) => {
    return (
      <Comment
        author={comment.author}
        date={comment.date}
        text={comment.text}
      />
    );
  });
  return (
    <div className="ui comments">
      <h3 className="ui dividing header">Comments</h3>
      {renderedComments}
    </div>
  );
};

export default CommentList;
