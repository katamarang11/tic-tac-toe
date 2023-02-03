function Moves({ historyAr }) {
  return historyAr.map((step, move) => {
    const desc = move ? "Перейти к ходу #" + move : "К началу игры";
    return (
      <li key={move}>
        <button onClick={() => this.jumpTo(move)}>{desc}</button>
      </li>
    );
  });
}

export default Moves;
