import React, { useEffect, useRef } from "react";

export default function TodoItem({ data, setTodoData }) {
  const checkboxRef = useRef(null);

  const onTodoItemClick = () => {
    setTodoData((prevArr) =>
      prevArr.map((prevData) => {
        if (prevData.id === data.id) {
          return {
            ...prevData,
            isDone: checkboxRef.current.checked,
          };
        }
        return prevData;
      })
    );
  };

  const onTodoItemDoubleClick = () => {
    setTodoData((prevArr) =>
      prevArr.filter((prevData) => prevData.id !== data.id)
    );
  };

  useEffect(() => {
    if (data.isDone) {
      checkboxRef.current.checked = true;
    }
  }, []);

  return (
    <li>
      <label onClick={onTodoItemClick} onDoubleClick={onTodoItemDoubleClick}>
        <input ref={checkboxRef} type="checkbox" />
        {data.text}
      </label>
    </li>
  );
}
