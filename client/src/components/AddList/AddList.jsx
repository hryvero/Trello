import React from 'react';
import { useState, useEffect} from 'react';
import AddIcon from '@mui/icons-material/Add';
import { AddListForm } from './AddListForm';

import "./style.scss"


export function AddList(props) {

      const [add, setAdd]=useState(false);

      return (
            <div className="column">

              <a className='add__list' href='#' onClick={()=>setAdd(!add)}>
                  <AddIcon />
                 <span className="add__list-text"> Додайте ще один список</span>
                 {add === true? <AddListForm/> : " "}
            </a>
            
            
           </div>
      );
}



