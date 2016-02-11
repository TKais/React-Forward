class Timer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			remainingSeconds: 100
		};
	}

	componentWillMount() {
		console.log("WILL MOUNT");
	}

	componentDidMount() {
		console.log("DID MOUNT");
		setInterval(() =>
			this.setState({
				remainingSeconds: this.state.remainingSeconds -1
		}), 
		1000);
	}

	render() {
		return (
			<div>{this.state.remainingSeconds}</div>
		)
	}
}

export default Timer;