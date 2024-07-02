import "./App.css";
import TaskList from "./components/taskList/TaskList";
import { useFetchTasksQuery } from "./redux/tasks/sliceRTK";

export const App = () => {
  const { data: tasks, isError, isLoading } = useFetchTasksQuery();
  // console.log(tasks, isError, isLoading);
  console.log(tasks);
  // const dispatch = useDispatch();

  // const isLoading = useSelector((state) => getIsLoading(state));
  // const error = useSelector((state) => getError(state));

  // useEffect(() => {
  //   dispatch(fetchTasks());
  // }, [dispatch]);

  return (
    <div>
      {isLoading && <p>LOADING....zzzz</p>}
      {isError && <p>{isError}</p>}
      {/* {tasks && <TaskList tasks={tasks} />} */}
      <TaskList tasks={tasks} />
    </div>
  );
};

export default App;
