import { useState } from "react";
import Board from "./Board";
import calculateWinner from "./calculateWinner";

import "./Game.css";

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [xIsNext, setXIsNext] = useState(true);
  const [number, setNumber] = useState(0);
  // console.log(history);

  function handleClick(i) {
    const historyAr = history.slice(0, number + 1);
    const current = historyAr[historyAr.length - 1];
    const array = current.slice();

    if (calculateWinner(array) || array[i]) return;
    array[i] = xIsNext ? "X" : "O";

    setHistory(historyAr.concat([array]));
    setNumber(historyAr.length);
    setXIsNext(!xIsNext);
  }

  function jumpTo(step) {
    setNumber(step);
    setXIsNext(step % 2 === 0);
  }

  const current = history[number];
  const winner = calculateWinner(current);

  const moves = history.map((step, move) => {
    const desc = move ? "Перейти к ходу № " + move : "К началу игры";
    return (
      <li className="list-btn" key={move}>
        <button className="btn-gam" onClick={() => jumpTo(move)}>
          {desc}
        </button>
      </li>
    );
  });

  let status;
  if (winner) {
    status = "Победил: " + winner;
  } else {
    status = "Следующий ход: " + (xIsNext ? "X" : "O");
  }

  return (
    <div className="game">
      <div className="game-background">
        <Board current={current} onClick={(i) => handleClick(i)} />
      </div>
      <div className="status">
        <div className="status-text">{status}</div>
        <ol className="btn-gam-info">{moves}</ol>
      </div>
    </div>
  );
};

export default Game;
