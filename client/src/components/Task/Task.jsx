import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import LastUpdated from "../LastUpdated/LastUpdated"
import { useDispatch } from 'react-redux';
import { updateTask, deleteTask } from '../../redux/tasks/taskActions';

import "./style.scss"



export function Task({ taskTitle,
	taskId,
	updatedAt,
	}) {

		const dispatch = useDispatch();

	const [open, setOpen] = useState(false)
	const [newTaskTitle, setNewTaskTitle] = useState('');


	const handleUpdateSubmit = (e) => {
		e.preventDefault();
		if (newTaskTitle === '') {
			return;
		}
		else {
		dispatch(updateTask(taskId, newTaskTitle))	;
			setNewTaskTitle('');
			setOpen(false)
		}
	}

	const handleDelete = async(id) => {
		if (window.confirm("Do you really want to delete this task ?")) {
			await dispatch(deleteTask(id));
			
		}
	}




	return (
		<div className="task">
			{open ?
				<form className="form" >
					<input className='add-form__input' type="text" name="name" placeholder={taskTitle} autoFocus
					 value={newTaskTitle} onChange={(e) => setNewTaskTitle(e.target.value)} />
					<div className='add-form__buttons'>
					<button className='add-form__btn btn' onClick={handleUpdateSubmit}>Змінити список </button>
					<CloseIcon className='close' onClick={() => setOpen(false)} />
					</div>
				</form>
				: <div className="content">
					<h4 className="task__title">{taskTitle}</h4>
					<LastUpdated date={updatedAt} locale="en-US" timeStyle="twitter"/>
					<div className="task__box">

						<EditIcon className='edit' onClick={() => setOpen(true)} />
						<DeleteIcon className='delete' onClick={() => handleDelete(taskId)} />
					</div>
				</div>}

		</div>
	);
}
