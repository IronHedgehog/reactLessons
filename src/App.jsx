import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { deleteTask, fetchTasks } from "./redux/tasks/operations";

export const App = () => {
  const dispatch = useDispatch();
  const { tasks, isLoading, error } = useSelector((state) => state.tasks);

  const onClickHendler = (id) => {
    dispatch(deleteTask(id));
  };

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div>
      {isLoading && <p>LOADING....zzzz</p>}
      {error && <p>{error}</p>}
      <p>
        {" "}
        {tasks.length > 0 && JSON.stringify(tasks, null, 2)}{" "}
        <button
          onClick={() => {
            onClickHendler(11);
          }}
        >
          Видалити
        </button>
      </p>
    </div>
  );
};

export default App;
