import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import LastUpdated from "../LastUpdated/LastUpdated"

import "./style.scss"



export function Task({ taskTitle,
	taskId,
	updatedAt,


	updateTaskTitle,
	deleteTask }) {



	const [open, setOpen] = useState(false)


	const [newTaskTitle, setNewTaskTitle] = useState('');
	const [taskTitleChangeBool, setTaskTitleChangeBool] = useState(false);


	const handleUpdateSubmit = (e) => {
		e.preventDefault();
		if (newTaskTitle === '') {
			return;
		}
		else {
			updateTaskTitle(taskId, newTaskTitle);
			setNewTaskTitle('');
			setTaskTitleChangeBool(!taskTitleChangeBool);
			setOpen(false)
		}
	}


	return (
		<div className="task">
			{open ?
				<form className="update-form" >
					<input
						className="update-task"
						type="text"
						autoFocus
						placeholder={taskTitle}
						onChange={event => setNewTaskTitle(event.target.value)}
					/>
					<button onClick={handleUpdateSubmit} className='btn'>Submit </button>
					<CloseIcon onClick={() => setOpen(false)} />
				</form>
				: <div className="content">
					<h4 className="task__title">{taskTitle}</h4>
					<LastUpdated date={updatedAt} locale="en-US" timeStyle="twitter"/>
					<div className="task__box">

						<EditIcon onClick={() => setOpen(true)} />
						<DeleteIcon onClick={() => deleteTask(taskId)} />
					</div>
				</div>}

		</div>
	);
}
