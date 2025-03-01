import { useState } from "react";
import {
  getStage,
  getAvailablePositionOnStage,
  useGame,
} from "../../../../../../../Provider";
import Button from "../../../../../Button";
import Select from "./_components/Select";

const Form = ({ onSubmit }) => {
  const [value, setValue] = useState("BLOCK");

  const {
    robotPositionOnStage,
    blockPositionsOnStage,
    setBlockPositionsOnStage,
    setMonsterPositionOnStage,
    setDestinationPositionOnStage,
  } = useGame();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        const stage = getStage(5, 5);

        const position = getAvailablePositionOnStage(stage, [
          robotPositionOnStage,
          ...blockPositionsOnStage,
        ]);

        if (value === "DESTINATION") {
          setDestinationPositionOnStage(position);
        }

        if (value === "MONSTER") {
          setMonsterPositionOnStage({
            ...position,
            face: "North",
          });
        }

        if (value === "BLOCK") {
          setBlockPositionsOnStage((prevState) => [...prevState, position]);
        }

        onSubmit();
      }}
      className="space-y-8"
    >
      <Select value={value} onChange={setValue} />
      <div className="text-right">
        <Button type="submit">Confirm</Button>
      </div>
    </form>
  );
};

export default Form;
