import axios from "axios";
import { useEffect, useState } from "react";
import CreateTodo from "./CreateToDo";

import ToDoItem from "./ToDoItem";

const TodoContainer = () => {
  const [todos, setTodos] = useState();
  const [allTodos, setAllTodos] = useState();
  const [idDelete, setIdDelete] = useState();
  const [idEdit, setIdEdit] = useState();
  const [newTodo, setNewTodo] = useState(null);
  const [resetForm, setResetForm] = useState(false);
  const [isCompleted, setIsCompleted] = useState();

  // Get Method
  useEffect(() => {
    axios.get("https://todos-academlo.herokuapp.com/api/todos").then((res) => {
      setTodos(res.data.todos);
    });
  }, []);

  // Delete Method
  useEffect(() => {
    if (idDelete) {
      const promise = axios({
        url: `https://todos-academlo.herokuapp.com/api/todo/${idDelete}`,
        method: "DELETE",
      });
      promise.then(() => {
        setTodos((prevState) =>
          prevState.filter((value) => value._id !== idDelete)
        );
      });
    }
  }, [idDelete]);

  // Put Method
  useEffect(() => {
    if (idEdit) {
      axios({
        url: `https://todos-academlo.herokuapp.com/api/todo/${idEdit}`,
        data: isCompleted,
        method: "PUT",
      }).then((response) => {
        setTodos((miEstate) =>
          miEstate.map((isCompleted) => {
            if (isCompleted._id !== response.data._id) {
              return isCompleted;
            }

            return {
              ...response.data,
            };
          })
        );
      });
      setIsCompleted(null);
    }
  }, [idEdit, isCompleted]);

  // Post Method
  useEffect(() => {
    if (newTodo) {
      const res = axios({
        url: "https://todos-academlo.herokuapp.com/api/todo/",
        data: newTodo,
        method: "POST",
      });
      res.then((response) => {
        setTodos((prevState) => [response.data, ...prevState]);
        setResetForm(true);
      });
    }
  }, [newTodo]);

  const handleCreateTodo = (data) => {
    setNewTodo(data);
  };

  const handleDelete = (id) => {
    setIdDelete(id);
  };

  const handleEdit = (id, isCompleted) => {
    if (isCompleted) {
      isCompleted = false;
    } else {
      isCompleted = true;
    }
    setIsCompleted({ isCompleted: isCompleted });
    setIdEdit(id);
  };

  useEffect(() => {
    if (todos) {
      const arrayToDos = todos.map((value) => (
        <ToDoItem
          key={value._id}
          onEdit={handleEdit}
          id={value._id}
          isCompleted={value.isCompleted}
          task={value.task}
          student={value.student}
          onDelete={handleDelete}
        />
      ));
      setAllTodos(arrayToDos);
    }
  }, [todos]);

  return (
    <>
      <CreateTodo resetForm={resetForm} onCreateTodo={handleCreateTodo} />
      <div className="gallery">
        {allTodos === null ? "loading tasks..." : allTodos}
      </div>
    </>
  );
};

export default TodoContainer;
