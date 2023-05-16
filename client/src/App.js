import "./App.scss"
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { loadList, deleteList, createList } from "./redux/lists/listActions";
import { loadTask, deleteTask, createTask } from "./redux/tasks/taskActions";
import { Column } from "./components/Column";
import { AddList } from "./components/AddList";



function App() {
	const dispatch = useDispatch();

	const {  lists } = useSelector((state) => state.list)
	const {  loading,tasks } = useSelector((state) => state.tasks)
	

	useEffect(() => {
		if(!loading){
			dispatch(loadTask())
		}
			
	}, [loading])
	

	useEffect(() => {
		if (!loading) {
			dispatch(loadList())
		}
	}, [loading])


	const handleDelete =  (id) => {
		if (window.confirm("Are you sure wanted to delete this card ?")) {
		 dispatch(deleteList(id))
		}
	}


	// 	const deleteTask = (id) => {
	// 	if (window.confirm("Are you sure want to delete this task ?")) {
	// 		dispatch(deleteTask(id))
	// 	}
	// }
	// const deleteTask = async (id) => {
	// 	setTask(task.filter(item => item.id !== id));

	// 	await fetch(api_base + "/tasks/" + id, {
	// 		method: 'DELETE'
	// 	});
	// }

	return (
		<div className="App">
			<h1>Your board</h1>
			<div className="wrapper">

				{lists ? lists.map(item => (
					<Column

						// key={item.id}

						columnTitle={item.title}

						taskList={tasks.filter((curr) => curr.column === item.id)}
						columnId={item.id}
					
						// Card Functions
						// updateCardTitle={updateTaskTitle}
						deleteCard={handleDelete}
					// addList={addList}

					// // Task Functions
					// updateTaskTitle={updateTaskTitle}
					// addTask={addTask}
					deleteTask={deleteTask}
					/>
				)) : (
					<p>You currently have no lists</p>
				)}
				<AddList />
			</div>
		</div>
	);

}


export default App;
