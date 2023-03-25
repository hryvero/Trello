import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { useState, useEffect } from 'react';

import "./style.scss"

const api_base="http://localhost:3001"


export function AddListForm(props){

      const [close, setClose]=useState(true);
      const [list, setList] = useState([]);
      const [newList, setNewList] = useState([]);


      

      const AddList = async(e) => {
            e.preventDefault();
            const data = await fetch(api_base + "/columns/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json" 
			},
			body: JSON.stringify({
				 title: newList.title,
			})
		}).then(res => res.json());

		
		console.log(data)
		setList([...list, data]);

		
		setNewList("");
         };
      return (
            <div className="form">
            {close===true? <form className='add-form' action="">
                 
                  <input className='add-form__input' 
                  type="text" 
                  name="name" 
                  placeholder="Увести назву списку..."  
                  maxLength="512" 
                  value={newList.title}/>
                  <div className='add-form__buttons'>
                        <button className='add-form__btn btn' onClick={AddList}>Додати список</button>
                         <CloseIcon className='close' onClick={()=>setClose(!close)} />
                  </div>
            </form> : null} 
            </div>
      );
}

