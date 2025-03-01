import Placement from "./components/Placement";
import Block from "./components/Block";
import Board from "./components/Board";
import Monster from "./components/Monster";
import Destination from "./components/Destination";
import Robot from "./components/Robot";
import { useGame } from "../Provider";

const Stage = () => {
  const {
    robotPositionOnStage,
    blockPositionsOnStage,
    monsterPositionOnStage,
    destinationPositionOnStage,
  } = useGame();

  return (
    <div className="relative rounded-md overflow-hidden">
      <Placement position={robotPositionOnStage}>
        <Robot />
      </Placement>

      {monsterPositionOnStage && (
        <Placement position={monsterPositionOnStage}>
          <Monster />
        </Placement>
      )}

      {destinationPositionOnStage && (
        <Placement position={destinationPositionOnStage}>
          <Destination />
        </Placement>
      )}

      {blockPositionsOnStage.map((position) => (
        <Placement key={`${position.x}, ${position.y}`} position={position}>
          <Block />
        </Placement>
      ))}
      <Board />
    </div>
  );
};

export default Stage;
