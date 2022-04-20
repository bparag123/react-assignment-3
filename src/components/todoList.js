import InputTodo from "./inputTodo";
import TodoItem from "./todoItem";
import { useState, useEffect, useRef } from "react";
import classes from "./Todolist.module.css"

const TodoList = () => {
  let initialState = [];

  //Getting the Data from LocalStorage
  try {
    initialState = JSON.parse(localStorage.getItem("todoData"));
    initialState = initialState.filter((ele) => {
      let today = new Date();
      let day = new Date(ele.date);
      return (
        day.getDate() === today.getDate() &&
        day.getDay() === today.getDay() &&
        day.getFullYear() === today.getFullYear()
      );
    });
  } catch (error) {
    initialState = [];
  }

  const [todo, setTodo] = useState(initialState);
  const listRef = useRef(null)

  useEffect(() => {
    localStorage.setItem("todoData", JSON.stringify(todo));
    listRef.current.scrollTop = listRef.current.scrollHeight
  }, [todo]);

  const onInputEvent = (data) => {
    setTodo(() => {
      return [...todo, data];
    });
  };

  let listContent = <h3>No Todo Items Found</h3>;

  if (todo.length > 0) {
    listContent = todo.map((ele, index) => {
      return (
        <div className={classes["todo-item"]} key={index}>
          <TodoItem title={ele.title} />
        </div>
      );
    });
  }

  return (
    <div className={classes["todo-list-container"]}>
      <div className={classes["temp"]} ref={listRef}>{listContent}</div>
      <InputTodo onSave={onInputEvent} />
    </div>
  );
};
export default TodoList;
