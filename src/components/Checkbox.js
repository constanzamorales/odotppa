import React from "react";

const Checkbox = (props) => {
	const {
		onChange,
		data: { id, task, done }
	} = props;

	return (
		<>
			<div className="ui checkbox">
				<input
					className=" todo__state"
					name={id}
					type="checkbox"
					defaultChecked={done}
					onChange={onChange}
				/>
				<label className=" todo new-item">{task}</label>
			</div>
		</>
	);
};

export default Checkbox;
