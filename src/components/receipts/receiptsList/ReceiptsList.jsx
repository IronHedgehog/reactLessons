import { uuid } from "uuidv4";
import ReceiptsItem from "../receiptsItem/ReceiptsItem";
const ReceiptsList = ({ recipies }) => {
  return (
    <ul>
      {recipies.map(({ name, time, servings, calories, difficulty, image }) => {
        return (
          <ReceiptsItem
            key={uuid()}
            name={name}
            time={time}
            servings={servings}
            calories={calories}
            difficulty={difficulty}
            image={image}
          />
        );
      })}
    </ul>
  );
};

export default ReceiptsList;
