import isOccupiedPositionOnStage from "../isOccupiedPositionOnStage";

const getAvailablePositionOnStage = (stage, occupiedPositionsOnStage) => {
  const positions = stage.filter(
    ({ x, y }) => !isOccupiedPositionOnStage(x, y, occupiedPositionsOnStage)
  );

  const randomIndex = Math.floor(Math.random() * positions.length);
  return positions[randomIndex];
};

export default getAvailablePositionOnStage;
