import React, { useState } from "react";
import styles from "../CSS/AddToDo.module.css";

export default function AddToDo({ toDos, addToDo }) {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (ev) => {
    ev.preventDefault();
    addToDo(inputValue);
    setInputValue("");
  };
  const handleChange = (ev) => {
    setInputValue(ev.target.value);
  };
  return (
    <div className={styles.addToDo}>
      <form onSubmit={handleSubmit} className={styles.toDoForm}>
        <input
          type="text"
          placeholder="Add Todo"
          value={inputValue}
          onChange={handleChange}
        />
        <button>Add</button>
      </form>
    </div>
  );
}
