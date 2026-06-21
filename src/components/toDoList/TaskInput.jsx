import Input from "../shared/Input";
import Button from "../shared/Button";
import { useTodoContext } from "../../hooks/useTodoContext";

const TaskInput = () => {
  const {
    value,
    setValue,
    handleAdd,
  } = useTodoContext();

  const isAddButtonDisabled = !value.trim();

  return (
    <div className="task-input">
      <Input
        value={value}
        placeholder="Add new task"
        onChange={setValue}
      />

      <Button
        onClick={handleAdd}
        label="Add"
        disabled={isAddButtonDisabled}
      />
    </div>
  );
};

export default TaskInput;
