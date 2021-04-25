import React from "react";

const styles = {
  padding: "25px",
};

const CommentField = (props) => {
  return (
    <form class="ui reply form" style={styles}>
      <div class="field">
        <textarea></textarea>
      </div>
      <div class="ui blue labeled submit icon button">
        <i class="icon edit"></i> Add Reply
      </div>
    </form>
  );
};

export default CommentField;
