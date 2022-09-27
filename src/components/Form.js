import React from "react";

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			task: ""
		};
	}

	render() {
		return (
			<form class="ui form">
				<div class="field">
					<label>Task</label>
					<input type="text" name="task" placeholder="Write your task"></input>
				</div>
				<button
					class="ui button"
					type="submit"
					onClick={() => this.setState({ task: this.state.task })}
				>
					Submit
				</button>
			</form>
		);
	}
}

export default Form;
