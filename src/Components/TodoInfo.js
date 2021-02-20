import React from "react";
import ToDoItem from "./ToDoItem";

function TodoInfo({ task, student, id }) {
  return (
    <div>
      <span>
        <strong> {task}</strong>
      </span>
      <span> By: {student}</span>
    </div>
  );
}

export default TodoInfo;
