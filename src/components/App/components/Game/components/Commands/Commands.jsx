import Button from "./components/Button";
import Place from "./components/Place";
import { useGame, move, turn } from "../Provider";

const Commands = () => {
  const {
    robotPositionOnStage,
    setRobotPositionOnStage,
    blockPositionsOnStage,
  } = useGame();

  return (
    <ul className="space-y-4">
      <li>
        <Button
          onClick={() => {
            setRobotPositionOnStage(({ x, y, face }) =>
              move({ x, y, face }, blockPositionsOnStage)
            );
          }}
        >
          Move
        </Button>
      </li>
      <li>
        <Button
          onClick={() => {
            setRobotPositionOnStage(({ x, y, face }) => ({
              x,
              y,
              face: turn(face, -1),
            }));
          }}
        >
          Left
        </Button>
      </li>
      <li>
        <Button
          onClick={() => {
            setRobotPositionOnStage(({ x, y, face }) => ({
              x,
              y,
              face: turn(face, +1),
            }));
          }}
        >
          Right
        </Button>
      </li>
      <li>
        <Place />
      </li>
      <li>
        <Button
          onClick={() => {
            const { x, y, face } = robotPositionOnStage;

            alert(`Robot is at (${x}, ${y}) facing ${face}`);
          }}
        >
          Report
        </Button>
      </li>
    </ul>
  );
};

export default Commands;
