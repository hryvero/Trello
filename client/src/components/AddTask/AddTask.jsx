import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { AddTaskForm } from './AddTaskForm';
import "./style.scss"




export function AddTask(props) {

      const [add, setAdd]= useState(false)

      return (
            
             <a className='add__task'  href="#" onClick={()=>setAdd(!add)}>
            
            <AddIcon />
           <span className="add__task-text"> Додайте завдання</span>
            {add===true? <AddTaskForm/> :  "" }
      </a>
     
      
     
      );
}

