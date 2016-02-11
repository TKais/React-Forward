class Row extends React.component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				{props.children}
			</div>
		)
	}
}

export default Row;