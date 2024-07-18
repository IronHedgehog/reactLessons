import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AddForm } from "../components/addForm/AddForm";
import TaskList from "../components/taskList/TaskList";
import { useFetchTasksQuery } from "../redux/tasks/sliceRTK";
import "./App.css";
// import { useFetchTasksQuery } from "./redux/tasks/sliceRTK";

export const TaskPage = () => {
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
    <>
      <div>
        {isLoading && <p>LOADING....zzzz</p>}
        {isError && <p>{isError}</p>}
        <p>asd</p>
        <AddForm />
        {tasks && <TaskList tasks={tasks} />}
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default TaskPage;
