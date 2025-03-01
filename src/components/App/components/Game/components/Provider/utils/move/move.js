import minmax from "../minmax";
import isOccupiedPositionOnStage from "../isOccupiedPositionOnStage";

const MOVE = {
  North: { dx: 0, dy: -1 },
  East: { dx: +1, dy: 0 },
  South: { dx: 0, dy: +1 },
  West: { dx: -1, dy: 0 },
};

const move = (positionOnStage, blockPositionsOnStage) => {
  const { x, y, face } = positionOnStage;

  const { dx, dy } = MOVE[face];

  const newPosition = {
    x: minmax(x + dx, 0, 4),
    y: minmax(y + dy, 0, 4),
    face,
  };

  if (
    isOccupiedPositionOnStage(
      newPosition.x,
      newPosition.y,
      blockPositionsOnStage
    )
  ) {
    return { x, y, face };
  }

  return newPosition;
};

export default move;
