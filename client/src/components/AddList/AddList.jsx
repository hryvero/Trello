import React from 'react';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { AddListForm } from './AddListForm';

import "./style.scss"


export function AddList() {

  const [open, setOpen] = useState(false);

  return (
    <div className="column">


      {open ? <AddListForm setOpen={setOpen} /> :
        <div className='add__list' onClick={() => setOpen(true)}>
          <AddIcon />
          <span className="add__list-text"> Додайте ще один список</span>
        </div>}

    </div>
  );
}



