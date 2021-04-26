import React, { useState, useEffect } from "react";
import CommentForm from "../CommentForm/CommentForm";
import CommentList from "../CommentList/CommentList";
import youtubeAPI from "../../api/youtubeAPI";

const CommentContainer = ({ selectedVideoId }) => {
  // TODO:
  // POST a comment from CommentForm
  // GET all comments on component mount
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");
  const [posted, setPosted] = useState(false);

  useEffect(() => {
    youtubeAPI.get(`/comments/${selectedVideoId}`).then((res) => {
      let fetchedComments = res.data;
      setComments(fetchedComments);
    });
  }, [selectedVideoId, posted]);

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
  };

  const handleChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };

  return (
    <div>
      <CommentForm
        submitForm={handleSubmit}
        text={text}
        handleChange={handleChange}
      />
      <CommentList comments={comments} />
    </div>
  );
};

export default CommentContainer;
