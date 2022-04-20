import { FaCheckCircle } from "react-icons/fa"
import { useState } from "react"
import classes from "./TodoItem.module.css"

const TodoItem = (props) => {

    const [isCompleted, setIsCompleted] = useState(false);

    const onClickHandler = (e) => {
        console.log(isCompleted);
        setIsCompleted((state) => !state)
    }

    let changeClass = isCompleted ? "completed" : "pending"

    return <div className={`${classes["todo-item-container"]} ${classes[changeClass]}`}>
        <div onClick={onClickHandler}>{props.title}</div>
        <FaCheckCircle className={classes["check"]} onClick={onClickHandler} />
    </div>
}

export default TodoItem