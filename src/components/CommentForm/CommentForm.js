import React from "react";

const styles = {
  padding: "25px",
};

const CommentField = ({ submitForm, text, handleChange }) => {
  return (
    <form className="ui reply form" style={styles} onSubmit={submitForm}>
      <div className="field">
        <input type="text" value={text} onChange={handleChange} />
      </div>
      <button className="ui blue labeled submit icon button" type="submit">
        <i className="icon edit"></i>
        Add Comment
      </button>
    </form>
  );
};

export default CommentField;
