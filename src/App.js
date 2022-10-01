import React from "react";
import Container from "./components/Container";
import Form from "./components/Form";
import TaskList from "./components/TaskList";

class App extends React.Component {
	render() {
		return (
			<div className="ui container">
				<Container />
				<Form />
				<TaskList />
			</div>
		);
	}
}

export default App;
