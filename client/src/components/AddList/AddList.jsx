import React from 'react';
import { useState, useEffect} from 'react';
import AddIcon from '@mui/icons-material/Add';
import { AddListForm } from './AddListForm';

import "./style.scss"


export function AddList({addList}) {

      const [open, setOpen]=useState(false);

      return (
            <div className="column">

              <div className='add__list' onClick={()=>setOpen(true)}>
                  <AddIcon />
                 <span className="add__list-text"> Додайте ще один список</span>
                 {open ? <AddListForm addList={addList}  setOpen={setOpen}/> : null}
            </div>
            
            
           </div>
      );
}



