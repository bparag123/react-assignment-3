import React, { useState } from "react";
import classes from "./InputTodo.module.css"

const InputTodo = (props) => {

  const [inputText, setInputText] = useState("")
  const [inputField, setInputField] = useState(false)

  const onKeyUp = (e) => {
    if (e.keyCode === 13) {
      if (inputText === "") {
        alert("Please Enter Title ")
      }
      else {
        props.onSave({ title: inputText, date: Date.now() })
        setInputText(()=>"")
      }
    }
    if (e.keyCode === 27) {
      setInputField(() => !inputField)
    }
  }

  const onButtonClicked = () => {
    setInputField(() => !inputField)
  }

  const handleChange = (e) => {
    setInputText(() => {
      return e.target.value
    })
  }

  return inputField 
  ? <input type="text" onKeyUp={onKeyUp} autoFocus value={inputText} onChange={handleChange} className={classes["todo-input"]} /> 
  : <button onClick={onButtonClicked} className={classes["add-todo"]}>+</button>;
};

export default InputTodo;
