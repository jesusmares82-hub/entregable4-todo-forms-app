import React from "react";
import { FcFullTrash } from "react-icons/fc";
import { FcCheckmark } from "react-icons/fc";

const ToDoItem = ({ task, student, id, isCompleted, onEdit, onDelete }) => {
  return (
    <div className="card">
      <h3>
        <input type="checkbox" onChange={() => onEdit(id, isCompleted)} />{" "}
        {task} {isCompleted ? <FcCheckmark /> : ""}
      </h3>
      <p> by {student} </p>
      <button onClick={() => onDelete(id)}>
        <FcFullTrash />
      </button>
    </div>
  );
};

export default ToDoItem;
