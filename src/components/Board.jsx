import Square from "./Square";

import "./Board.css";

const Board = ({ onClick, current }) => {
  return (
    <div>
      <div className="board-row">
        {current.map((square, i) => (
          <Square key={i} value={square} onClick={() => onClick(i)} />
        ))}
      </div>
    </div>
  );
};

export default Board;
