import { toast } from "react-toastify";
import { useAddTaskMutation } from "../../redux/tasks/sliceRTK";

export const AddForm = () => {
  const [addTask, { isLoading, isError, isSuccess }] = useAddTaskMutation();
  // useDispatch необхідний для звʼязку action з компонентом
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const inputValue = form.elements.text.value;
    const task = {
      text: inputValue,
      completed: false,
    };
    addTask(task);

    isError &&
      toast.error("🦄 Wow so easy!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: "Bounce",
      });

    toast.success("🦄 Wow so easy!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 1,
      theme: "colored",
      transition: "Zoom",
    });
    //dispatch = s(d){return e.dispatch(D(d,i,o,s)),d} D = назва екшен креейтеру
    // dispatch(addTask(inputValue));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="text" placeholder="Enter task text..." />
      <button type="submit">Add task</button>
    </form>
  );
};
