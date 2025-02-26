import Row from "./components/Row";

const Board = () => (
  <div
    role="grid"
    aria-label="Board"
    className="border border-black rounded-md"
  >
    <Row y={0} />
    <Row y={1} />
    <Row y={2} />
    <Row y={3} />
    <Row y={4} />
  </div>
);

export default Board;
