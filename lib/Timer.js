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

	stopTimer() {
		clearInterval(this.timerId);
	}

	componentDidMount() {
		console.log("DID MOUNT");
		this.timerId = setInterval(() =>
			this.setState({
				remainingSeconds: this.state.remainingSeconds -1
		}), 
		1000);
	}

	render() {
		return (
			<div onClick={this.stopTimer.bind(this)}>{this.state.remainingSeconds}</div>
		)
	}
}

export default Timer;