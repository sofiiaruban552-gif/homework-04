import Button from "../shared/Button";
import clsx from "clsx";
import { useTodoContext } from "../../hooks/useTodoContext";

const TaskFilter = () => {
  const { filter, setFilter, todos } = useTodoContext();

  const isDisabled = todos.length === 0;

  const getButtonClass = (isActive) =>
    clsx("button-filter", isActive && "button-filter--active");

  const TASK_FILTERS = [
    { value: "all", label: "All" },
    { value: "active", label: "Active" },
    { value: "done", label: "Done" },
  ];

  return (
    <div className="task-filter">
      {TASK_FILTERS.map(({ value, label }) => {
        return (
          <Button
            key={value}
            label={label}
            onClick={() => setFilter(value)}
            className={getButtonClass(filter === value)}
            disabled={isDisabled}
          />
        );
      })}
    </div>
  );
};

export default TaskFilter;
