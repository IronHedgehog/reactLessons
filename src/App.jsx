import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import TaskList from "./components/taskList/TaskList";
import { fetchTasks } from "./redux/tasks/operations";
import { getError, getIsLoading } from "./redux/tasks/selectors";

export const App = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => getIsLoading(state));
  const error = useSelector((state) => getError(state));

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
