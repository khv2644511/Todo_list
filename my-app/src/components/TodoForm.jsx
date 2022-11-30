import React from "react";
import { useRef } from "react";

export default function TodoForm({ setTodoData }) {
  const inputRef = useRef(null);
  const onTodoSubmit = (event) => {
    event.preventDefault();

    const inputVal = inputRef.current.value;

    if (!inputVal) {
      return;
    }

    setTodoData((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: inputVal,
        isDone: false,
      },
    ]);

    inputRef.current.value = "";
  };

  return (
    <form onSubmit={onTodoSubmit}>
      <label htmlFor="todo-input">투두 입력란</label>
      <input
        ref={inputRef}
        id="todo-input"
        type="text"
        placeholder="Create Todo!"
      />
    </form>
  );
}
