// rafce

import TaskItem from "./taskItem/TaskItem";

const TaskList = ({ tasks }) => {
  // const tasks = useSelector(tasksSelector);

  return (
    <ul>
      {tasks?.length > 0 &&
        tasks.map(({ id, completed, text }) => {
          return (
            <TaskItem key={id} id={id} completed={completed} text={text} />
          );
        })}
    </ul>
  );
};

export default TaskList;
