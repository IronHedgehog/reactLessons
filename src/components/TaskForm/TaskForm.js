import { Button } from "components/Button/Button";
import { useDispatch } from "react-redux";
import { addTask } from "redux/slice";
import css from "./TaskForm.module.css";

export const TaskForm = () => {
  const dispatch = useDispatch();
  // useDispatch необхідний для звʼязку action з компонентом
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const inputValue = form.elements.text.value;
    //dispatch = s(d){return e.dispatch(D(d,i,o,s)),d} D = назва екшен креейтеру
    dispatch(addTask(inputValue));
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Enter task text..."
      />
      <Button type="submit">Add task</Button>
    </form>
  );
};
