import SectionCard from "../shared/SectionCard";
import TaskInput from "./TaskInput";
import TaskFilter from "./TaskFilter";
import TaskList from "./TaskList";
import ActiveTasksCounter from "./ActiveTasksCounter";

const ToDoList = () => {
  const TASK_HEADINGS = {
    title: "To-Do List",
    subtitle: "Classic task manager app"
  };

  return (
    <SectionCard>
      <h2 className="section-title">{TASK_HEADINGS.title}</h2>
      <h3 className="section-subtitle">{TASK_HEADINGS.subtitle}</h3>
      <TaskInput />
      <TaskFilter />
      <TaskList />
      <ActiveTasksCounter />
    </SectionCard>
  );
};

export default ToDoList;
