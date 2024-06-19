import { useDispatch } from "react-redux";
import { deleteTask } from "../../../redux/tasks/operations";
import s from "./TaskItem.module.css";

const TaskItem = ({ id, completed, text }) => {
  const dispatch = useDispatch();
  return (
    <li className={s.listItem} id={id}>
      <p className={s.text}>{text}</p>
      <input
        className={s.checkbox}
        type="checkbox"
        completed={completed.toString()}
      />
      <button
        onClick={(e) => {
          dispatch(deleteTask(179));
        }}
        className={s.buttonDelete}
      >
        Видалити
      </button>
    </li>
  );
};

export default TaskItem;
