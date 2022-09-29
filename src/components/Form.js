import React from "react";
import { useRef } from "react";

const Form = () => {
	const inputRef = useRef(null);

	function handleClick(event) {
		event.preventDefault();
		console.log("task is: ", inputRef.current.value);
	}

	return (
		<form className="ui form">
			<div className="field">
				<label>Task</label>
				<input
					ref={inputRef}
					type="text"
					id="task"
					name="task"
					placeholder="Write your task"
				></input>
			</div>
			<button className="ui button" type="submit" onClick={handleClick}>
				Submit
			</button>
			<p>Task:</p>
		</form>
	);
};

export default Form;
