import { useState } from "react";
import Commands from "./components/Commands";
import Stage from "./components/Stage";

// 验证 state 应该被放置在哪里，验证！验证！验证！

// 步骤五：添加反向数据流
// 当点击 Move -> 我们要做什么事情
// 当点击 Left -> 我们要做什么事情
// 当点击 Right -> 我们要做什么事情
// 当点击 Report -> 我们要做什么事情

// 已知，Game 来设置参数 setRobotPositionOnStage
// 在 Game 中把所有的 业务逻辑 写出来
// handle*

const modulo = (n, m) => ((n % m) + m) % m;
const minmax = (n, min, max) => Math.min(max, Math.max(min, n));

const MOVE = {
  North: { dx: 0, dy: -1 },
  East: { dx: +1, dy: 0 },
  South: { dx: 0, dy: +1 },
  West: { dx: -1, dy: 0 },
};

const FACES = ["North", "East", "South", "West"];
const turn = (face, di) => {
  const currentIndex = FACES.indexOf(face);
  const nextIndex = modulo(currentIndex + di, FACES.length);

  return FACES[nextIndex];
};

// 在组件里面，实现业务逻辑的方法，永远使用 handle* 这种 event handler 的命名方式
// 声明式编程 + HTML like， button.addEventListener('click', handleButtonClick) -》 clickHandler

// Robot （10） -> block （5） -> 宝箱  （5） -> 宝箱会消失 （5） -> Monster （5） -> Monster 自己会移动 （20）

// Single Responsibly
// Open Close

// 符合人类思维方式的代码才是最好的代码

const Game = () => {
  const [robotPositionOnStage, setRobotPositionOnStage] = useState({
    x: 2,
    y: 3,
    face: "North",
  });

  const [blockPositionsOnStage, setBlockPositionsOnStage] = useState([]);

  const isBlocked = (x, y) =>
    blockPositionsOnStage.some((block) => block.x === x && block.y === y);

  const handleCommandsMoveClick = () => {
    setRobotPositionOnStage(({ x, y, face }) => {
      const { dx, dy } = MOVE[face];

      const newPosition = {
        x: minmax(x + dx, 0, 4),
        y: minmax(y + dy, 0, 4),
        face,
      };

      if (isBlocked(newPosition.x, newPosition.y)) {
        return { x, y, face };
      }

      return newPosition;
    });
  };

  const handleCommandsLeftClick = () => {
    setRobotPositionOnStage(({ x, y, face }) => ({
      x,
      y,
      face: turn(face, -1),
    }));
  };

  const handleCommandsRightClick = () => {
    setRobotPositionOnStage(({ x, y, face }) => ({
      x,
      y,
      face: turn(face, +1),
    }));
  };

  const handleCommandsReportClick = () => {
    const { x, y, face } = robotPositionOnStage;

    alert(`Robot is at (${x}, ${y}) facing ${face}`);
  };

  const handleCommandsBlockClick = () => {
    const positions = Array.from({ length: 5 }, (_, i) => i)
      .reduce((acc, x) => {
        return [
          ...acc,
          ...Array.from({ length: 5 }, (_, y) => y).map((y) => ({ x, y })),
        ];
      }, [])
      .filter(({ x, y }) => {
        const isSameXPositionToRobotOnStage = x === robotPositionOnStage.x;
        const isSameYPositionToRobotOnStage = y === robotPositionOnStage.y;

        const isSamePositionToRobotOnStage =
          isSameXPositionToRobotOnStage && isSameYPositionToRobotOnStage;

        return !isBlocked(x, y) && !isSamePositionToRobotOnStage;
      });

    const randomIndex = Math.floor(Math.random() * positions.length);
    const blockPosition = positions[randomIndex];

    setBlockPositionsOnStage((prevState) => [...prevState, blockPosition]);
  };

  return (
    <main className="p-12 flex justify-between items-center">
      <Stage
        robotPosition={robotPositionOnStage}
        blockPositions={blockPositionsOnStage}
      />
      <Commands
        onMoveButtonClick={handleCommandsMoveClick}
        onLeftButtonClick={handleCommandsLeftClick}
        onRightButtonClick={handleCommandsRightClick}
        onBlockButtonClick={handleCommandsBlockClick}
        onReportButtonClick={handleCommandsReportClick}
      />
    </main>
  );
};

export default Game;
