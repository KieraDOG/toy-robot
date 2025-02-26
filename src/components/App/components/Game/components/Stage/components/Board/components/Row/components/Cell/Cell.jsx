const Cell = ({ x, y }) => (
  <div
    role="cell"
    aria-label={`${x},${y}`}
    className="w-[60px] h-[60px] border border-black"
  />
);

export default Cell;
