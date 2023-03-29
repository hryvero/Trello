import "./App.scss"
import { useEffect, useState } from 'react';
import { Column } from "./components/Column";
import { AddList } from "./components/AddList";


import tasks from "./mocks/tasks.json";
import { Task } from "./components/Task";

const api_base = 'http://127.0.0.1:3001';

function App() {

	const [list, setList] = useState([]);
	const [task, setTask] = useState([]);



	useEffect(() => {
		GetLists();
	}, []);

	const GetLists = () => {
		fetch(api_base + '/columns/')
			.then(res => res.json())
			.then(({ data }) => setList(data))
			.catch((err) => console.error("Error: ", err));
	}


	useEffect(() => {
		GetTasks();
	}, []);

	const GetTasks = () => {
		fetch(api_base + '/tasks/')
			.then(res => res.json())
			.then(({ data }) => setTask(data))
			.catch((err) => console.error("Error: ", err));
	}

	// ------ TASK'S STATE ------
	// Update Card Title && Update State

	const addList = async (e) => {
		e.preventDefault();
		const data = await fetch(api_base + "/columns/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				title: list.title,
			})
		}).then(res => {
			res.json()
		});
	}
	const deleteList = async (e, id) => {
		e.stopPropagation();
		const data = await fetch(api_base + '/columns/' + id, { method: "DELETE" }).then(res => res.json());


		console.log(data)
		setList(list => list.filter(item => item._id !== id));
	}

	// ------ TASK'S STATE ------
	const updateTaskTitle = async (id, newName) => {
		const data = await fetch(api_base + "/tasks/" + id, {
			method: 'PUT',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				title: newName
			})
		}).then(res => res.json());

		setTask(task.map(item => item.id === data.id ? data : item))
	}

	// Add Task to Card & Update State

	const addTask = async (parentId, addedTitle) => {
		const data = await fetch(api_base + "/tasks/", {
			method: "POST",
			headers: {
				'Accept': 'application/json',
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				title: addedTitle,
				column: parentId,
			})
		}).then(res => {
			return res.json()
		})
		setTask([...task, data])
	}

	const deleteTask = async (id) => {
		setTask(task.filter(item => item.id !== id));

		await fetch(api_base + "/tasks/" + id, {
			method: 'DELETE'
		});
	}




	return (
		<div className="App">
			<h1>Your board</h1>
			<div className="wrapper">

				{list.length > 0 ? list.map(item => (
					<Column
						// key={item.id}

						columnTitle={item.title}

						taskList={task.filter((curr) => curr.column === item.id)}
						columnId={item.id}

						// Card Functions
						updateCardTitle={updateTaskTitle}
						deleteCard={deleteList}
						addList={addList}

						// Task Functions
						updateTaskTitle={updateTaskTitle}
						addTask={addTask}
						deleteTask={deleteTask}
					/>
				)) : (
					<p>You currently have no lists</p>
				)}
				<AddList addList={addList} />
			</div>
		</div>
	);

}


export default App;
