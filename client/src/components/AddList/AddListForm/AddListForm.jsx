import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { useState, useEffect } from 'react';

import "./style.scss"

const api_base = "http://localhost:3001"


export function AddListForm({ addList, setOpen,open }) {

	const [title, setTitle] = useState('');

	const handleClose = () => (e) => {
		e.stopPropagation()
		setOpen(false)
	}

	const handleAddSubmit = (e) => {
		e.preventDefault();
		if (title === ''){
				return;
		}
		else{
			 addList( title);
			 setTitle('');
		}
}
	return (
		<div className="form">
			{open ? <div className='add-form'>

				<input className='add-form__input' type="text" name="name" placeholder="Увести назву списку..."  
				 value={title} onChange={(e) => setTitle(e.target.value)} />
				<div className='add-form__buttons'>
					<button className='add-form__btn btn' onClick={handleAddSubmit}>Додати список</button>
					<CloseIcon className='close' onClick={handleClose()} />
				</div>
			</div> : null}
		</div>
	);
}

