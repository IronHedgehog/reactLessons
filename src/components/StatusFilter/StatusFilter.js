import { Button } from "components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { filtersValue } from "redux/constants";
import { toggleFilter } from "redux/filterSlice";
import { getFilterStatus } from "redux/selectors";
import css from "./StatusFilter.module.css";

export const StatusFilter = () => {
  const filter = useSelector((state) => getFilterStatus(state));
  const dispatch = useDispatch();

  const clickOnFilterButton = (e) => {
    const targetText = e.target.textContent.toLowerCase();
    dispatch(toggleFilter(targetText));
  };

  return (
    <div onClick={clickOnFilterButton} className={css.wrapper}>
      <Button
        selected={filter.toLowerCase() === filtersValue.all.toLowerCase()}
      >
        All
      </Button>
      <Button
        selected={filter.toLowerCase() === filtersValue.active.toLowerCase()}
      >
        Active
      </Button>
      <Button
        selected={filter.toLowerCase() === filtersValue.completed.toLowerCase()}
      >
        Completed
      </Button>
    </div>
  );
};
