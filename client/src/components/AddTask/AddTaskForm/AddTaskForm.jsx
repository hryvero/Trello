import React from 'react';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

import { useDispatch } from 'react-redux';
import { createTask } from '../../../redux/tasks/taskActions';
import "./style.scss"



export function AddTaskForm({ setOpen, parentId}) {

	const dispatch = useDispatch();

	const [title, setTitle] = useState([]);

	const handleAddSubmit = (e) => {
		e.preventDefault();
		if (title === '') {
			return;
		}
		else {
			const newTask={
				title,
				column: parentId
			}
			dispatch(createTask(newTask));
			setTitle('');
			setOpen(false)
		}
	}

	return (
		<div className="form">
			<form className='add-form' action="">
				<input className='add-form__input' type="text" name="title" placeholder="Увести назву завдання..." 
				value={title} onChange={event => setTitle(event.target.value)} />
				<div className='add-form__buttons'>
					<button className='add-form__btn btn' onClick={handleAddSubmit}>Додати завдання</button>
				</div>
			</form>
		</div>
	);
}
