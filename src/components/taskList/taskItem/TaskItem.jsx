import { FadeLoader } from "react-spinners";
import { useDeleteTasksMutation } from "../../../redux/tasks/sliceRTK";
import s from "./TaskItem.module.css";

const TaskItem = ({ id, completed, text }) => {
  // const dispatch = useDispatch();
  console.log();
  const [deleteTask, { isLoading }] = useDeleteTasksMutation();

  return (
    <li className={s.listItem} id={id}>
      <p className={s.text}>{text}</p>
      <input
        className={s.checkbox}
        type="checkbox"
        completed={completed.toString()}
      />

      <button
        disabled={isLoading}
        onClick={(e) => {
          deleteTask(id);
          // dispatch(deleteTask(id));
        }}
        className={s.buttonDelete}
      >
        {isLoading ? <FadeLoader height={10} radius={1} width={5} /> : "Delete"}
      </button>
    </li>
  );
};

export default TaskItem;
