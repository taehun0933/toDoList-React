import React, { useState } from "react";
import styles from "./CSS/ToDoList.module.css";
import NavBar from "./components/NavBar";
import ToDos from "./components/ToDos";
import AddToDo from "./components/AddToDo";

// 투두 추가 구현
// 1. AddToDo 컴포넌트에서 submit이벤트 발생 시, toDos 컴포넌트의 toDos state를 가져와 업데이트해야 함.
//  -> 때문에 기존 toDos 컴포넌트의 toDos state가 아닌, 두개의 상위 컴포넌트인 ToDoList 컴포넌트에서 이를 선언 후 하위 컴포넌트로 전달.

export default function ToDoList() {
  const [toDos, setToDos] = useState(["피자", "치킨", "커피"]);
  const addToDo = (addValue) => {
    setToDos((toDos) => [...toDos, addValue]);
  };
  return (
    <>
      <div className={styles.container}>
        <NavBar />
        <ToDos toDos={toDos} />
        <AddToDo toDos={toDos} addToDo={addToDo} />
      </div>
    </>
  );
}
