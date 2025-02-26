import Cell from "./components/Cell";

const Row = ({ y }) => (
  <div role="row" aria-label={`${y}`} className="flex">
    <Cell x={0} y={y} />
    <Cell x={1} y={y} />
    <Cell x={2} y={y} />
    <Cell x={3} y={y} />
    <Cell x={4} y={y} />
  </div>
);

export default Row;
