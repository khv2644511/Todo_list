import React, { useState } from "react";
import { useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

export default function Todo() {
  const [todoData, setTodoData] = useState(
    JSON.parse(localStorage.getItem("todo")) ?? []
  );

  useEffect(() => {
    console.log(todoData);
    //   todoData가 바뀌었을 때 로컬 스토리지에 저장하기
    localStorage.setItem("todo", JSON.stringify(todoData));
  }, [todoData]);

  return (
    <>
      <TodoForm setTodoData={setTodoData} />
      <ul>
        {React.Children.toArray(
          todoData.map((data) => (
            <TodoItem data={data} key={data.id} setTodoData={setTodoData} />
          ))
        )}
      </ul>
    </>
  );
}
/** 투두 내용
 * 했는지 안했는지
 * 박시우 머찌다,,
 */

/**
 * [투두 내용, 했는지 안했는지]
 */

/**
 * {id: '아이디',
 * text : 투두 내용,
 * isDone: 했는지 안했는지}
 */

// 궁금한거
// checked
// prev.id === data.id
// useEffect(() => {
//     if (data.isDone) {
//       checkboxRef.current.checked = true;
//     }
//   }, []);
