import React from "react";
import { useState } from "react";

const Form = (props) => {
	const { handleAddItem } = props;
	const [task, setTask] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(task);

		handleAddItem({
			done: false,
			id: (+new Date()).toString(),
			task
		});
		setTask("");
	};

	return (
		<form className="form" onSubmit={handleSubmit}>
			<div className="field">
				<label>Write your task</label>
				<input
					type="text"
					id="task"
					name="task"
					placeholder="i.e: Wash the dishes"
					value={task}
					onChange={(e) => setTask(e.target.value)}
				></input>
			</div>
			<button disabled={task ? "" : "disabled"}>Submit</button>
		</form>
	);
};

export default Form;
