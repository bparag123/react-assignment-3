import "./App.css";
import Header from "./components/Header";
import TodoList from "./components/todoList";

const App = () => {
  return (
    <div className="App">
      <Header />
      <TodoList />
    </div>
  );
};

export default App;
