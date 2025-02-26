import Button from "./components/Button";

// 设定参数被从 Button 组件中移除了，那么设定参数就成了它上一层组件的责任
// Commands 设定参数合理吗？合理
// Commands 的 setRobotPositionOnStage -》 合理吗？ -》 合理
// 所有的 props 名称都不要直接用 state setter 的名称，而是使用 **event listener*** 的表达方式
// 声明式编程 + HTML like
// button onClick, input onChange, form onSubmit
// Commands 的 onRobotPositionOnStageChange -》 合理吗？ -》 不合理
// 命令 的 当机器人在舞台位置发生改变的时候
// 我们现在需要一个 on* (event listener) 的 props 来传递 -》 命令 的 Button onClick 的时候
// 命令 的 当按钮被点击的时候
// onButtonClick 用来设置 x, y, Face 合理吗？ -》 不合理

const Commands = ({
  onMoveButtonClick,
  onLeftButtonClick,
  onRightButtonClick,
  onBlockButtonClick,
  onReportButtonClick,
}) => (
  <ul className="space-y-4">
    <li>
      <Button onClick={onMoveButtonClick}>Move</Button>
    </li>
    <li>
      <Button onClick={onLeftButtonClick}>Left</Button>
    </li>
    <li>
      <Button onClick={onRightButtonClick}>Right</Button>
    </li>
    <li>
      <Button onClick={onBlockButtonClick}>Block</Button>
    </li>
    <li>
      <Button onClick={onReportButtonClick}>Report</Button>
    </li>
  </ul>
);

export default Commands;
