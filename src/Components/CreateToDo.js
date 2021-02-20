import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import axios from "axios";
const CreateTodo = ({
  onCreateTodo,
  resetForm,
  data = {
    isCompleted: "",
    task: "",
    student: "",
    _id: null,
  },
}) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: data,
  });
  const [newToDo, setNewToDo] = useState();

  useEffect(() => {
    if (newToDo) {
      const res = axios({
        url: "https://todos-academlo.herokuapp.com/api/todo",
        data: newToDo,
        method: "POST",
      });
    }
  }, [newToDo]);

  useEffect(() => {
    if (resetForm) {
      reset({
        task: "",
        student: "",
        isCompleted: "false",
      });
    }
  }, [resetForm, reset]);

  const onSubmit = (data) => {
    console.log(data);
    onCreateTodo(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <input
            type="text"
            name="task"
            ref={register}
            placeholder="Type task here..."
          />
        </label>
        <label>
          <input
            type="text"
            name="student"
            ref={register}
            placeholder="Type student here..."
          />
        </label>
        <button>Create Task</button>
      </form>
    </div>
  );
};

export default CreateTodo;
