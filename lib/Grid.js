import Row from "./Row"
import Cell from "./Cell"

class Grid extends React.component {
	constructor(props) {
		super(props);

		this.prepareMatrix();
	}

	prepareMatrix() {
		this.matrix = [];

		for(var r = 0; r<this.props.rows; r++) {
			var row= [];
			for(var c = 0; c<this.props.columns; c++) {
				row.push(`${r}${c}`);
			}
			this.matrix.push(row);
		}

	}

	render() {
		return (
			<div>
				{
					this.matrix.map(cells => 
						<Row>
							{cells.map(cellId =>
								<Cell />
							)}
						</Row>
					)
				}
			</div>
		);
	}
}

export default Grid;