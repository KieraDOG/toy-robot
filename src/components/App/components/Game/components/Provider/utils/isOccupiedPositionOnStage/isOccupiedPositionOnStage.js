const isOccupiedPositionOnStage = (x, y, occupiedPositionsOnStage) =>
  occupiedPositionsOnStage.some((block) => block.x === x && block.y === y);

export default isOccupiedPositionOnStage;
