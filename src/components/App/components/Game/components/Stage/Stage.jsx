import Placement from "./components/Placement";
import Block from "./components/Block";
import Board from "./components/Board";
import Robot from "./components/Robot";

const Stage = ({ robotPosition, blockPositions }) => (
  <div className="relative rounded-md overflow-hidden">
    <Placement position={robotPosition}>
      <Robot />
    </Placement>

    {blockPositions.map((position) => (
      <Placement key={`${position.x}, ${position.y}`} position={position}>
        <Block />
      </Placement>
    ))}
    <Board />
  </div>
);

export default Stage;
