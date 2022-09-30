import React from "react";
import { useState } from "react";

const Form = () => {
	const [task, setTask] = useState("");

	let tempTask;

	const onChange = (event) => {
		event.preventDefault();
		tempTask = event.target.value;
	};

	return (
		<form className="ui form">
			<div className="field">
				<label>Task</label>
				<input
					type="text"
					id="task"
					name="task"
					placeholder="Write your task"
					onChange={onChange}
				></input>
			</div>
			<button
				className="ui button"
				type="submit"
				onClick={(e) => {
					e.preventDefault();
					setTask(tempTask);
				}}
			>
				Submit
			</button>
			<p>Task: {task}</p>
		</form>
	);
};

export default Form;
