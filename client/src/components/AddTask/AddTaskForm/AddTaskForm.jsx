import React from 'react';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';


import "./style.scss"



export function AddTaskForm({ setOpen,addTask, parentId}) {

	// console.log(id)

	const [addTaskTitle, setAddTaskTitle] = useState('')

	const handleClose = () => (e) => {
		setOpen(false)
		e.stopPropagation()
	}

	const handleAddSubmit = (e) => {
		e.preventDefault();
		if (addTaskTitle === ''){
				return;
		}
		else{
			 addTask(parentId, addTaskTitle);
			 setAddTaskTitle('');
		}
}

	

	return (
		<div className="form">
			<form className='add-form' action="">
				<input className='add-form__input' type="text" name="title" placeholder="Увести назву завдання..." 
				value={addTaskTitle} onChange={event => setAddTaskTitle(event.target.value)} />
				<div className='add-form__buttons'>
					<button className='add-form__btn btn' onClick={handleAddSubmit}>Додати завдання</button>
					<CloseIcon onClick={handleClose()} className='close' />
				</div>
			</form>
			{/* <Task id={id} title={title} setTitle={setTitle}/> */}
		</div>
	);
}
