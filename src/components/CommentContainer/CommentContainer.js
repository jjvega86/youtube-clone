import React, { useState, useEffect } from "react";
import CommentForm from "../CommentForm/CommentForm";
import CommentList from "../CommentList/CommentList";
import youtubeAPI from "../../api/youtubeAPI";

const CommentContainer = ({ selectedVideoId }) => {
  // TODO:
  // POST a comment from CommentForm
  // GET all comments on component mount
  const [comments, setComments] = useState([]);
  useEffect(() => {
    youtubeAPI.get(`/comments/${selectedVideoId}`).then((res) => {
      let fetchedComments = res.data;
      setComments(fetchedComments);
    });
  });

  return (
    <div>
      <CommentForm />
      <CommentList comments={comments} />
    </div>
  );
};

export default CommentContainer;
