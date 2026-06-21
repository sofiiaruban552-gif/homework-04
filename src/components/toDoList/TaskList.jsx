import TaskItem from "./TaskItem";
import { useTodoContext } from "../../hooks/useTodoContext";

const TaskList = () => {
  const { filteredTodos } = useTodoContext();

  return (
    <ul>
      {filteredTodos.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
