import React from "react";
import Checkbox from "./Checkbox";

const TaskList = (props) => {
	const { list, setList } = props;

	const check = list.map((item) => <Checkbox key={item.id} data={item} />);

	return (
		<div className="todo-list">
			{list.length ? check : "There are no tasks yet"}
			{list.length ? (
				<p>
					<button className="ui button">Delete completed tasks</button>
				</p>
			) : null}
			<div>TaskList works</div>
			<Checkbox />
		</div>
	);
};

export default TaskList;
