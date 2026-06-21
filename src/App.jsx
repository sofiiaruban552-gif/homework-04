import "./App.css";
import RegisterForm from "./components/RegisterForm";
import ToDoList from "./components/toDoList/ToDoList";

import { TodoProvider } from "./contexts/TodoProvider";

const App = () => {
  return (
    <TodoProvider>
      <div className="wrapper">
        <RegisterForm />
        <ToDoList />
      </div>
    </TodoProvider>
  );
};

export default App;
