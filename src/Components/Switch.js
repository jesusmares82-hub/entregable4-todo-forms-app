import React, { useRef } from "react";
import "../Switch.css";
import "../App.css";
import { useEffect, useState } from "react";

function Switch() {
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
    <div className="dark-mode">
      <strong> Dark Mode: </strong>
      <label className="switch ml-4">
        <input
          className="checkbox "
          type="checkbox"
          defaultChecked={checked}
          onChange={() => toggleThemeChange()}
        />
      </label>
    </div>
  );
}

export default Switch;
