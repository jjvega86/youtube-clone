import React, { useState, useEffect } from "react";
import CommentForm from "../CommentForm/CommentForm";
import CommentList from "../CommentList/CommentList";
import youtubeAPI from "../../api/youtubeAPI";

const CommentContainer = ({ selectedVideoId }) => {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");
  const [posted, setPosted] = useState(false);

  useEffect(() => {
    getComments();
  }, [selectedVideoId, posted]);

  const getComments = async () => {
    await youtubeAPI
      .get(`/comments/${selectedVideoId}`)
      .then((res) => {
        let fetchedComments = res.data;
        setComments(fetchedComments);
      })
      .catch((error) => console.error(error.response.data));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await youtubeAPI
      .post("/comments", {
        videoId: selectedVideoId,
        comment: {
          author: "JJ",
          date: new Date().toString(),
          text: text,
        },
      })
      .then((res) => console.log(res))
      .catch((error) => console.error(error.response.data));
    setPosted(!posted);
    setText("");
  };

  const handleChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };

  const deleteComment = async (id) => {
    console.log(id);
    youtubeAPI
      .delete(`/comments/${selectedVideoId}/${id}`)
      .then((res) => {
        console.log(res);
        getComments();
      })
      .catch((error) => console.error(error.response.data));
  };

  return (
    <div>
      <CommentForm
        submitForm={handleSubmit}
        text={text}
        handleChange={handleChange}
      />
      <CommentList comments={comments} deleteComment={deleteComment} />
    </div>
  );
};

export default CommentContainer;
