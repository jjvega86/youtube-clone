import React, { useState } from "react";
import CommentForm from "../CommentForm/CommentForm";
import CommentList from "../CommentList/CommentList";

const CommentContainer = () => {
  const [comments, setComments] = useState([]);
  return (
    <div>
      <CommentForm />
      <CommentList comments={comments} />
    </div>
  );
};

export default CommentContainer;
