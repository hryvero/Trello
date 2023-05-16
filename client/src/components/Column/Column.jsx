import React, { useState, useEffect } from 'react';
import { Task } from '../Task';
import DeleteIcon from '@mui/icons-material/Delete';
import { AddTask } from '../AddTask/AddTask';
import { useDispatch, useSelector } from "react-redux"
import { loadTask, deleteTask, createTask } from "../../redux/tasks/taskActions";

import "./style.scss"




export function Column({ columnTitle, columnId, deleteCard, taskList, tasks, deleteTask }) {
	const dispatch = useDispatch();

	const handleDelete = async(id) => {
		if (window.confirm("Are you sure wanted to delete this card ?")) {
			await dispatch(deleteTask(id));
			await dispatch(loadTask())
		}
	}



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
						deleteTask={handleDelete}
					/>))}


				<AddTask parentId={columnId} />

			</div>
		</div>

	);
}

export default Column;