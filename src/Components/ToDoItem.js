import React from "react";

const ToDoItem = ({ id, isCompleted, onEdit, onDelete }) => {
  return (
    <>
      <button onClick={() => onDelete(id)}>Delete</button>

      <input type="checkbox" onChange={() => onEdit(id, isCompleted)} />
    </>
  );
};

export default ToDoItem;
