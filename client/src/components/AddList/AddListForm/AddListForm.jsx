import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { useState, useEffect } from 'react';

import "./style.scss"

const api_base = "http://localhost:3001"


export function AddListForm({ open, setOpen }) {

	const [title, setTitle] = useState('');

	const handleClose = () => (e) => {
		e.stopPropagation()
		setOpen(false)
	}

	const addList = async (e) => {
		e.preventDefault();
		const data = await fetch(api_base + "/columns/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				title: title,
			})
		}).then(res => {
			setOpen(false)
			setTitle('')
		});


	
		setTitle([...title, data]);


		
	};
	return (
		<div className="form">
			{open ? <div className='add-form'>

				<input className='add-form__input' type="text" name="name" placeholder="Увести назву списку..."  maxLength="512"
				 value={title} onChange={(e) => setTitle(e.target.value)} />
				<div className='add-form__buttons'>
					<button className='add-form__btn btn' onClick={addList}>Додати список</button>
					<CloseIcon className='close' onClick={handleClose()} />
				</div>
			</div> : null}
		</div>
	);
}

