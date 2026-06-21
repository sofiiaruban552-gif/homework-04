import clsx from "clsx";
import { Trash2 } from "lucide-react";
import ButtonIcon from "../shared/ButtonIcon";
import { useTodoContext } from "../../hooks/useTodoContext";

const TaskItem = ({ task }) => {
  const { handleToggle, handleDelete } = useTodoContext();
  const { id, text, done } = task;

  const labelClassName = clsx(
    "task-item__label",
    done && "task-item__label--done",
  );

  return (
    <li className="task-item">
      <input
        type="checkbox"
        id={id}
        checked={done}
        onChange={() => handleToggle(id)}
      />

      <label htmlFor={id} className={labelClassName}>
        {text}
      </label>

      <ButtonIcon
        onClick={() => handleDelete(id)}
        icon={<Trash2 size={20} />}
      />
    </li>
  );
};

export default TaskItem;
