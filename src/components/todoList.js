import InputTodo from "./inputTodo"
import TodoItem from "./todoItem"
import { useState, useEffect } from 'react';

const TodoList = () => {
    let initialState = []

    //Getting the Data from LocalStorage
    try {
        initialState = JSON.parse(localStorage.getItem('todoData'))
        initialState = initialState.filter((ele) => {
            let today = new Date()
            let day = new Date(ele.date)
            return day.getDate() === today.getDate()
                && day.getDay() === today.getDay()
                && day.getFullYear() === today.getFullYear()
        })
    } catch (error) {
        initialState = []
    }
    const [field, setField] = useState({
        inputField: false
    })

    const [todo, setTodo] = useState(initialState)
    const [input, setInput] = useState("")

    useEffect(() => {
        localStorage.setItem("todoData", JSON.stringify(todo))
        setInput("")
    }, [todo]);

    const clickHandle = () => {
        setField(!field)
    }

    const onKeyUp = (e) => {
        console.log(e.keyCode)
        if (e.keyCode === 13) {
            if (input === "") {
                alert("Please Enter Title ")
            }
            else {
                setTodo([...todo, { title: input, date: Date.now() }])
            }
        }
        if (e.keyCode === 27) {
            setField(!field)
        }
    }

    const handleInput = (e) => {
        setInput(e.target.value)
    }
    return <div>
        {todo.map((ele) => {
            return <TodoItem text={ele.title} />
        })}
        {field ?
            <button onClick={clickHandle}>+</button>
            : <InputTodo handler={handleInput} value={input} onKeyUp={onKeyUp} />}


    </div>
}
export default TodoList