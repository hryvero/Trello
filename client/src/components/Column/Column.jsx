import React, { useState, useEffect } from 'react';
import { Task } from '../Task';
import DeleteIcon from '@mui/icons-material/Delete';
import { AddTask } from '../AddTask/AddTask';
import { useDispatch, useSelector } from "react-redux"
import { loadTask, updateTask, deleteTask, createTask } from "../../redux/tasks/taskActions";

import "./style.scss"




export function Column({ columnTitle, columnId, deleteCard, taskList, tasks, deleteTask }) {
	const dispatch = useDispatch();





	return (
		<div className="column">

			<div className="card">
				<div className="card__title">
					<h3>{columnTitle}</h3>

					<DeleteIcon className='delete' onClick={() => deleteCard(columnId)} />
				</div>
				{taskList.map(curr => (
					<Task
						// Task Properties
						taskTitle={curr.title}
						taskId={curr.id}
						updatedAt={curr.updatedAt}
						parentId={columnId}
					/>))}


				<AddTask parentId={columnId} />

			</div>
		</div>

	);
}

export default Column;