import "./App.scss"
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { loadList, deleteList } from "./redux/actions";
import { Column } from "./components/Column";
import { AddList } from "./components/AddList";





function App() {


	const dispatch = useDispatch();

	const { lists } = useSelector((state) => state.data)
	const status = useSelector((state) => state.data.loading)



	console.log("lists", lists[0])

	useEffect(() => {
		if (status === "true") {
			console.log("Loading...")
		} else {
			dispatch(loadList())
		}



	}, [status, dispatch])

 const handleSubmit=()=>{
	if(window.confirm("Are you sure wanted to delete this card ?")){
		dispatch(deleteList())
	}
 }

	// const [list, setList] = useState([]);
	// const [task, setTask] = useState([]);

	// useEffect(() => {
	// 	GetTasks();
	// }, []);

	// const GetTasks = () => {
	// 	fetch(api_base + '/tasks/')
	// 		.then(res => res.json())
	// 		.then(({ data }) => setTask(data))
	// 		.catch((err) => console.error("Error: ", err));
	// }

	// // ------ TASK'S STATE ------
	// // Update Card Title && Update State

	// const addList = async (addedTitle) => {
	// 	const data = await fetch(api_base + "/columns/", {
	// 		method: "POST",
	// 		headers: {
	// 			'Accept': 'application/json',
	// 			"Content-Type": "application/json"
	// 		},
	// 		body: JSON.stringify({
	// 			title: addedTitle,
	// 		})
	// 	}).then(res => {
	// 		return res.json()
	// 	})
	// 	setList([...list, data])
	// }
	// const deleteList = async (id) => {

	// 	const data = await fetch(api_base + '/columns/' + id, { method: "DELETE" }).then(res => res.json());


	// 	console.log(data)
	// 	setList(list => list.filter(item => item._id !== id));
	// }

	// // ------ TASK'S STATE ------
	// const updateTaskTitle = async (id, newName) => {
	// 	const data = await fetch(api_base + "/tasks/" + id, {
	// 		method: 'PUT',
	// 		headers: {
	// 			'Accept': 'application/json',
	// 			'Content-Type': 'application/json',
	// 		},
	// 		body: JSON.stringify({
	// 			title: newName
	// 		})
	// 	}).then(res => res.json());

	// 	setTask(task.map(item => item.id === data.id ? data : item))
	// }

	// // Add Task to Card & Update State

	// const addTask = async (parentId, addedTitle) => {
	// 	const data = await fetch(api_base + "/tasks/", {
	// 		method: "POST",
	// 		headers: {
	// 			'Accept': 'application/json',
	// 			"Content-Type": "application/json"
	// 		},
	// 		body: JSON.stringify({
	// 			title: addedTitle,
	// 			column: parentId,
	// 		})
	// 	}).then(res => {
	// 		return res.json()
	// 	})
	// 	setTask([...task, data])
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

				{lists.length > 0 ? lists.map(item => (
					<Column
					
						// key={item.id}

						columnTitle={item.title}

						// taskList={task.filter((curr) => curr.column === item.id)}
						columnId={item.id}

					// Card Functions
					// updateCardTitle={updateTaskTitle}
					deleteCard={handleSubmit}
					// addList={addList}

					// // Task Functions
					// updateTaskTitle={updateTaskTitle}
					// addTask={addTask}
					// deleteTask={deleteTask}
					/>
				)) : (
					<p>You currently have no lists</p>
				)}
				{/* <AddList addList={addList} /> */}
			</div>
		</div>
	);

}


export default App;
