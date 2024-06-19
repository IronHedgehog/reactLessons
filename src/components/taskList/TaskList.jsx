// rafce

import { useSelector } from "react-redux";
import TaskItem from "./taskItem/TaskItem";

const TaskList = () => {
  const { tasks } = useSelector((state) => state.tasks);
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
