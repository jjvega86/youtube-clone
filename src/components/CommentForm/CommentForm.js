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
    <form class="ui reply form" style={styles} onSubmit={handleSubmit}>
      <div class="field">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <button class="ui blue labeled submit icon button" type="submit">
        <i class="icon edit"></i>
        Add Comment
      </button>
    </form>
  );
};

export default CommentField;
