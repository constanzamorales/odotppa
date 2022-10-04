import React from "react";
import Checkbox from "./Checkbox";

const TaskList = (props) => {
	const { list, setList } = props;

	const onChange = (e) => {
		const { name, checked } = e.target;
		const updateList = list.map((item) => ({
			...item,
			done: item.id === name ? checked : item.done
		}));
		setList(updateList);
	};

	const check = list.map((item) => (
		<Checkbox onChange={onChange} key={item.id} data={item} />
	));

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
