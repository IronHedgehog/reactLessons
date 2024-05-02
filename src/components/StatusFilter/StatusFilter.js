import { Button } from "components/Button/Button";
import { useSelector } from "react-redux";
import { filtersValue } from "redux/constants";
import { getFilterStatus } from "redux/selectors";
import css from "./StatusFilter.module.css";

export const StatusFilter = () => {
  const filter = useSelector((state) => getFilterStatus(state));

  return (
    <div className={css.wrapper}>
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
