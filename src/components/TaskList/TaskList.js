import { Task } from "components/Task/Task";
import { useSelector } from "react-redux";
import { neededTask } from "redux/selectors";
import css from "./TaskList.module.css";

// const getNeddedTasks = (tasks, filter) => {
//   switch (filter) {
//     case filtersValue.active:
//       return tasks.filter((task) => !task.completed);

//     case filtersValue.completed:
//       return tasks.filter((task) => task.completed);

//     default:
//       return tasks;
//   }
// };

export const TaskList = () => {
  // useSelector - дозволяє підписатись на стейт
  // const tasks = useSelector((state) => state.tasks);

  // const filter = useSelector((state) => state.filter.status);

  const neededTasks = useSelector((state) => neededTask(state));
  return (
    <ul className={css.list}>
      {neededTasks?.map((task) => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
