import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteTask, toggleCompleted } from "redux/actions";
import css from "./Task.module.css";

export const Task = ({ task }) => {
  const dispatch = useDispatch();
  console.log(task);
  const onClick = (id) => {
    dispatch(deleteTask(id));
  };

  const change = (id) => {
    dispatch(toggleCompleted(id));
  };
  return (
    <div className={css.wrapper}>
      <input
        onChange={(e) => change(task.id)}
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={(e) => onClick(task.id)}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
