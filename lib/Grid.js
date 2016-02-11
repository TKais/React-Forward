import Row from "./Row";
import Cell from "./Cell";
import _ from "lodash";

class Grid extends React.Component {
  constructor(props) {
    super(props);

    this.prepareMatrix();
  }
  prepareMatrix() {
    this.matrix = [];
    for(let r = 0; r < this.props.rows; r++) {
      let row = [];
      for(let c = 0; c < this.props.columns; c++) {
        row.push(`${r}${c}`);
      }
      this.matrix.push(row);
    }

    let flatMatrix = _.flatten(this.matrix);

    this.randomCells = _.sampleSize(flatMatrix, this.props.activeCellCount);
  }
  render() {
    return (
      <div>
        {
          this.matrix.map((cells, i) =>
            <Row key={i}>
              {cells.map(cellId =>
                <Cell key={cellId} id={cellId}
                      gameState={this.props.gameState}
                      randomCells={this.randomCells} />
              )}
            </Row>
          )
        }
      </div>
    );
  }
}

export default Grid;