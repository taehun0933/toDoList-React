import React, { useState } from "react";
import styles from "../CSS/ToDos.module.css";
import { TiTrash } from "react-icons/ti";

export default function ToDos({ toDos }) {
  return (
    <div className={styles.toDosContainer}>
      <ul className={styles.toDos}>
        {toDos.map((item) => (
          <li className={styles.toDo}>
            <div className={styles.toDoCheckAndContent}>
              <input type="checkbox" />
              {item}
            </div>
            <button>
              <TiTrash className={styles.deleteBtn} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
