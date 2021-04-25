import React, { useState } from "react";

const styles = {
  padding: "25px",
};

const CommentField = () => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`You've submitted this text: ${text}`);
  };

  return (
    <form className="ui reply form" style={styles} onSubmit={handleSubmit}>
      <div className="field">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <button className="ui blue labeled submit icon button" type="submit">
        <i className="icon edit"></i>
        Add Comment
      </button>
    </form>
  );
};

export default CommentField;
