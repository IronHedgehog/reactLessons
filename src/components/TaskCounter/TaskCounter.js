import { useSelector } from "react-redux";
import { completedTasks } from "redux/selectors";
import css from "./TaskCounter.module.css";

export const TaskCounter = () => {
  // const tasks = useSelector((state) => state.tasks);
  // const tasks = useSelector((state) => getTasks(state));
  const tasks = useSelector(completedTasks);

  console.log(tasks);
  const counter = tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 }
  );

  return (
    <div>
      <p className={css.text}>Active: {counter.active}</p>
      <p className={css.text}>Completed: {counter.completed}</p>
    </div>
  );
};
