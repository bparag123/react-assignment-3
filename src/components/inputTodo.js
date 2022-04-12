const InputTodo = (props) => {
  return <input type="text" onKeyUp={props.onKeyUp} value={props.value} onChange={props.handler} name="todo" id="todo" />;
};

export default InputTodo;
