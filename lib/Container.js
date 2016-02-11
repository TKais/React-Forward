import Timer from "./Timer"
import Grid from "./Grid"
import Footer from "./Footer"

class Container extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			timers: [50, 100],
			inputValue: ""
		};
	}

	addTimer() {
		let timers = this.state.timers;
		timers.push(this.state.inputValue);
		this.setState({timers, inputValue: ""});
	}

	updateInput(e) {
		this.setState({
			inputValue: e.target.value
		})
	}

	render() {
		return (
			<div>
				<Grid rows={5} columns={5} />
				<Footer />
			</div>
		)
	}
}

export default Container;