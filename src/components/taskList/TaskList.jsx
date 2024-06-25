// rafce

import { useSelector } from "react-redux";
import { tasksSelector } from "../../redux/tasks/selectors";
import TaskItem from "./taskItem/TaskItem";

const TaskList = () => {
  const tasks = useSelector((state) => tasksSelector(state));
  return (
    <ul>
      {tasks.length > 0 &&
        tasks.map(({ id, completed, text }) => {
          return (
            <TaskItem key={id} id={id} completed={completed} text={text} />
          );
        })}
    </ul>
  );
};

export default TaskList;
