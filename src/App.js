function Square({ value }) {
  function handleClick() {
    {value}="Y"
  }
  return <button className="square" onClick={handleClick}>{value}</button>
}
export default function Board() {
  return <>
    <div className="board-row">
      <Square value="X" />
      <Square value="X" />
    </div>
    <div className="board-row">
      <Square value="X" />
      <Square value="X" />

    </div>
  </>
}
