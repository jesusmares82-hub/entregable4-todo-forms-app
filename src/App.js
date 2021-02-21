import "./App.css";
import { useEffect, useState } from "react";
import TodoContainer from "./Components/ToDoContainer";

function App() {
  const [checked, setChecked] = useState(
    localStorage.getItem("theme") === "dark" ? true : false
  );

  useEffect(() => {
    document
      .getElementsByTagName("HTML")[0]
      .setAttribute("data-theme", localStorage.getItem("theme"));
  }, [checked]);

  const toggleThemeChange = () => {
    if (checked === false) {
      localStorage.setItem("theme", "dark");
      setChecked(true);
    } else {
      localStorage.setItem("theme", "light");
      setChecked(false);
    }
  };

  return (
    <div className="App">
      <label>
        <strong>Dark Mode:</strong>
        <input
          type="checkbox"
          defaultChecked={checked}
          onChange={() => toggleThemeChange()}
        />
      </label>
      <h1>ToDo App</h1>
      <TodoContainer />
    </div>
  );
}

export default App;
