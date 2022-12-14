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

	const onClickRemove = (e) => {
		const updateList = list.filter((item) => !item.done);
		setList(updateList);
	};

	const check = list.map((item) => (
		<Checkbox onChange={onChange} key={item.id} data={item} />
	));

	return (
		<div className="todo-list">
			<h5>To-do</h5>
			{list.length ? check : "There are no tasks yet"}
			{list.length ? (
				<button className="delete-btn" onClick={onClickRemove}>
					Delete completed tasks
				</button>
			) : null}
		</div>
	);
};

export default TaskList;
