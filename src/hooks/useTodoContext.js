import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

export const useTodoContext = () => {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error("useTodoContext має бути всередині TodoProvider");
  }

  return context;
};
