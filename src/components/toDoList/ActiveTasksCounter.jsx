import { useTodoContext } from "../../hooks/useTodoContext";

const ActiveTasksCounter = () => {
  const { todos } = useTodoContext();

  const activeTasksCount = todos.filter(
    (task) => !task.done
  ).length;

  return (
    <span>
      Active Tasks Left: {activeTasksCount}
    </span>
  );
};

export default ActiveTasksCounter;
