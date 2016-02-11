const Cell = (props) => {
  let active = props.gameState === "memorize"
               && props.randomCells.indexOf(props.id) >= 0;
  return (
    <div className={`cell active-${active}`}>
    </div>
  );
};

export default Cell;