import "./App.css";
import RegisterForm from "./components/RegisterForm";
import ToDoList from "./components/toDoList/ToDoList";
import ThemeToggle from "./components/ThemeToggle";

import { ThemeProvider } from "./contexts/ThemeProvider";
import { TodoProvider } from "./contexts/TodoProvider";

const App = () => {
  return (
    <ThemeProvider>
      <TodoProvider>
        <ThemeToggle />
        <RegisterForm />
        <ToDoList />
      </TodoProvider>
    </ThemeProvider>
  );
};

export default App;
