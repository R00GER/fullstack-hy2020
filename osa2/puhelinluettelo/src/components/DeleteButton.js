import React from "react";

const DeleteButton = (props) => {
  return (
    <button className="deleteBtn" onClick={() => props.onClick(props.id)}>
      Delete
    </button>
  );
};

export default DeleteButton;
