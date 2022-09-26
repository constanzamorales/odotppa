import React from "react";

class Form extends React.Component {
	render() {
		return (
			<form class="ui form">
				<div class="field">
					<label>Task</label>
					<input type="text" name="task" placeholder="Write your task"></input>
				</div>
				<button class="ui button" type="submit">
					Submit
				</button>
			</form>
		);
	}
}

export default Form;
