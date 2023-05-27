import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { AddTaskForm } from './AddTaskForm';
import "./style.scss"




export function AddTask({addTask,parentId}) {

      const [open, setOpen] = useState(false)

      return (
            <div>
          
{open ? <AddTaskForm addTask={addTask} parentId={parentId} setOpen={setOpen} /> :   <div className='add__task' onClick={() => setOpen(true)}>
                  <AddIcon />
                  <span className="add__task-text"> Додайте завдання</span>
                  
            </div>}
</div>

      );
}

