import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';

import "./style.scss"

const api_base = 'http://127.0.0.1:3001';

export function Task({ taskTitle,
	taskId,
	updatedAt,
	parentId,
	// Task Functions
	updateTaskTitle,
	deleteTask }) {



	const [open, setOpen] = useState(false)
	

	const [newTaskTitle, setNewTaskTitle] = useState('');
	const [taskTitleChangeBool, setTaskTitleChangeBool] = useState(false);


const todayDate = new Date();
const oldDate=new Date(updatedAt)

console.log(todayDate.getHours())

const difference = todayDate.getTime() - oldDate.getTime()

let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
console.log(TotalDays + ' days to world Cup');

	const handleUpdateSubmit = (e) => {
			e.preventDefault();
			if (newTaskTitle === ''){
					return;
			}
			else{
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
													placeholder={taskTitle}
													onChange={event => setNewTaskTitle(event.target.value)}
											/>
											<button onClick={handleUpdateSubmit}className='btn'>Submit </button>
											<CloseIcon onClick={() => setOpen(false)} />
									</form>
					: <div className="content">
						<h4 className="task__title">{taskTitle}</h4>
						<p>Updated: {TotalDays} day ago</p>
					<div className="task__box">
		
						<EditIcon onClick={() => setOpen(true)} />
						<DeleteIcon onClick={() => deleteTask(taskId)} />	
						</div>
					</div>	}
		
		</div>
	);
}
