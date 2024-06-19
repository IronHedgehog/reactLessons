import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import TaskList from "./components/taskList/TaskList";
import { fetchTasks } from "./redux/tasks/operations";

export const App = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div>
      {isLoading && <p>LOADING....zzzz</p>}
      {error && <p>{error}</p>}
      <TaskList />
    </div>
  );
};

export default App;
