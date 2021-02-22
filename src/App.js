import "./App.css";
import TodoContainer from "./Components/ToDoContainer";
import Switch from "./Components/Switch";

function App() {
  return (
    <div className="App">
      <Switch />
      <h1>ToDo App</h1>
      <TodoContainer />
    </div>
  );
}

export default App;
