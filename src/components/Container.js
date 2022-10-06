import React, { useState } from "react";
import Form from "./Form";
import TaskList from "./TaskList";

const Container = () => {
	// We use useState with an empty array to store the tasks
	const [list, setList] = useState([]);

	const handleAddItem = (addItem) => {
		// We take the current list and "spread it" into a new array and we add the new item
		setList([...list, addItem]);
	};

	return (
		<div className="container">
			<Form handleAddItem={handleAddItem} />
			<TaskList list={list} setList={setList} />
		</div>
	);
};

export default Container;
