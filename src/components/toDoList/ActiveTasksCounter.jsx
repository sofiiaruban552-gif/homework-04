import { useTodoContext } from "../../hooks/useTodoContext";

const ActiveTasksCounter = () => {
  const { filteredTodos } = useTodoContext();

  const activeTasksCount = filteredTodos.filter((task) => !task.done).length;

  return (
    <span>
      Active Tasks: {activeTasksCount || "No tasks yet"}
    </span>
  );
};

export default ActiveTasksCounter;
