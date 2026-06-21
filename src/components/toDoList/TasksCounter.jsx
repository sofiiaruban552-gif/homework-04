import { useTodoContext } from "../../hooks/useTodoContext";

const TasksCounter = () => {
  const { filteredTodos } = useTodoContext();

  const tasksCount = filteredTodos.length;

  if (!tasksCount) {
    return <span>No tasks yet</span>;
  }

  return <span>Tasks: {tasksCount}</span>;
};

export default TasksCounter;
