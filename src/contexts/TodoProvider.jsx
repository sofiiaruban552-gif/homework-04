import { useState } from "react";
import { TodoContext } from "./TodoContext";

export const TodoProvider =({ children })=> {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");
  const [filter, setFilter] = useState("all");

  const handleAdd = () => {
    if (!value.trim()) return;

    const newTask = {
      id: Date.now(),
      text: value,
      done: false,
    };

    setTodos((prev) => [...prev, newTask]);
    setValue("");
  };

  const handleToggle = (id) => {
    setTodos((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task,
      ),
    );
  };

  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((task) => task.id !== id));
  };

  const filteredTodos = todos.filter((task) => {
    if (filter === 'active') return !task.done;
    if (filter === 'done') return task.done;
    
    return true;
  });

  const contextValue = {
    todos,
    filteredTodos,
    value,
    setValue,
    filter,
    setFilter,
    handleAdd,
    handleToggle,
    handleDelete,
  };

  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  );
}
