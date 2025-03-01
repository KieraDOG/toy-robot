import { useEffect, useRef, useState } from "react";
import Context from "./Context";
import turn from "./utils/turn";
import move from "./utils/move";

const Provider = ({ children }) => {
  const [robotPositionOnStage, setRobotPositionOnStage] = useState({
    x: 2,
    y: 3,
    face: "North",
  });

  const [blockPositionsOnStage, setBlockPositionsOnStage] = useState([]);

  const [monsterPositionOnStage, setMonsterPositionOnStage] = useState();

  const [destinationPositionOnStage, setDestinationPositionOnStage] =
    useState();

  const occupiedPositionOnStageRef = useRef([]);
  useEffect(() => {
    occupiedPositionOnStageRef.current = destinationPositionOnStage
      ? [...blockPositionsOnStage, destinationPositionOnStage]
      : [...blockPositionsOnStage];
  }, [blockPositionsOnStage, destinationPositionOnStage]);

  useEffect(() => {
    setMonsterPositionOnStage((prevMonsterPositionOnStage) => {
      if (!prevMonsterPositionOnStage) {
        return;
      }

      const di = [-1, 0, +1][Math.floor(Math.random() * 3)];
      const face = turn(prevMonsterPositionOnStage, di);

      console.log(face);

      const newPosition = move(
        {
          ...prevMonsterPositionOnStage,
          face,
        },
        occupiedPositionOnStageRef.current
      );

      return newPosition;
    });
  }, [robotPositionOnStage]);

  useEffect(() => {
    if (
      robotPositionOnStage.x === monsterPositionOnStage?.x &&
      robotPositionOnStage.y === monsterPositionOnStage?.y
    ) {
      alert("Game Over");
    }
  }, [robotPositionOnStage, monsterPositionOnStage]);

  useEffect(() => {
    if (
      robotPositionOnStage.x === destinationPositionOnStage?.x &&
      robotPositionOnStage.y === destinationPositionOnStage?.y
    ) {
      alert("Game Win");
    }
  }, [robotPositionOnStage, destinationPositionOnStage]);

  return (
    <Context.Provider
      value={{
        robotPositionOnStage,
        setRobotPositionOnStage,
        blockPositionsOnStage,
        setBlockPositionsOnStage,
        monsterPositionOnStage,
        setMonsterPositionOnStage,
        destinationPositionOnStage,
        setDestinationPositionOnStage,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
