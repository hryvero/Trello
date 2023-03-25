import React from 'react';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';


import "./style.scss"

// const api_base = 'http://127.0.0.1:3001';


export function AddTaskForm(props) {
      const [close, setClose]=useState(true)
      // const [list, setList] = useState([]);
      // const [newList, setNewList] = useState([]);



      return (
            <div className="form">
          {close===true ? <form className='add-form' action="">
                  
                  <input className='add-form__input' type="text" name="name" placeholder="Увести назву Завдання..." dir="auto" maxlength="512" />
                  <div className='add-form__buttons'>
                        <button className='add-form__btn btn'>Додати завдання</button>
                         <CloseIcon onClick={()=>setClose(!close)} className='close'/>
                  </div>
            </form> : null }
             
           

            </div>
      );
}

