import "./App.scss"
import { useEffect, useState } from 'react';
import { Column } from "./components/Column";
import { AddList } from "./components/AddList";


import tasks from "./mocks/tasks.json";

const api_base = 'http://127.0.0.1:3001';

function App() {

  const [list, setList] = useState([]);
  const [newList, setNewList] = useState([]);

  useEffect(() => {
		GetLists();
	}, []);

	const GetLists = () => {
		fetch(api_base + '/columns/')
			.then(res => res.json())
			.then(({data}) => setList(data))
			.catch((err) => console.error("Error: ", err));
	}

  // const AddList = async () => {
	// 	const data = await fetch(api_base + "/columns/", {
	// 		method: "POST",
	// 		headers: {
	// 			"Content-Type": "application/json" 
	// 		},
	// 		body: JSON.stringify({
	// 			 title: newList.title,
	// 		})
	// 	}).then(res => res.json());

		
	// 	console.log(data)
	// 	setList([...list, data]);

	
	// 	setNewList("");
	// }
//  console.log(list)


  return (
    <div className="App">
      <h1>Your board</h1>
      <div className="wrapper">

        
				{list.length > 0 ? list.map(list => (
					<Column  data={list} />
				)) : (
					<p>You currently have no lists</p>
				)}
	


        
        <AddList />
      
       
      </div>


    </div>
  );
}

export default App;
