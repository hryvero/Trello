import React, { useState } from 'react';
import { Task } from '../Task';
import DeleteIcon from '@mui/icons-material/Delete';
import { AddTask } from '../AddTask/AddTask';

import "./style.scss"


const api_base = 'http://127.0.0.1:3001';

export function Column({ columnTitle, taskList, columnId, deleteCard,
	updateTaskTitle, addTask, deleteTask }) {

	// const [title, setTitle] = useState();
	// const [open, setOpen] = useState(false)

// console.log(taskList.map((i)=>i.title))
// console.log(taskList)


	return (
		<div className="column">

			<div className="card">
				<div className="card__title">
					<h3>{columnTitle}</h3>

					<DeleteIcon onClick={() => deleteCard(columnId)} />
				</div>
				{taskList.map(curr => (
					<Task
						// Task Properties
						taskTitle={curr.title}
						taskId={curr.id}
						updatedAt={curr.updatedAt}
			
						parentId={columnId}

						// Task Functions
						updateTaskTitle={updateTaskTitle}
						deleteTask={deleteTask}/>))}


				<AddTask addTask={addTask} parentId={columnId} />

			</div>
		</div>

	);
}

export default Column;