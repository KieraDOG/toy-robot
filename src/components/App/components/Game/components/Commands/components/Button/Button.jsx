const Button = ({ children, onClick, type = "button" }) => (
  <button
    type={type}
    onClick={onClick}
    className="
      min-w-[150px] border-1 border-gray-800 rounded-full h-[50px]
      hover:bg-gray-200 hover:cursor-pointer
    "
  >
    {children}
  </button>
);

// 加一个 Block Button
// 点击之后，会随机 Block 地图上一个除了机器人现在位置的位置，这个位置机器人不能通过

// 可复用性 -> 完全不等于考虑未来，解偶合 -> Open Close -> 组件或者方法只考虑自己的逻辑责任
// 一步一个脚印

export default Button;
