import React from 'react';
import { useState, useEffect } from 'react';

import "./style.scss"
import { useDispatch } from 'react-redux';
import { createList } from '../../../redux/lists/listActions';


export function AddListForm({ setOpen }) {

	const dispatch = useDispatch();
	const [title, setTitle] = useState('');


	const handleAddSubmit = (e) => {
		e.preventDefault();
		if (title === '') {
			return;
		}
		else {
			dispatch(createList(title));
			setTitle('');
			setOpen(false)
		}
	}
	return (
		<div className="form">
			 <div className='add-form'>

				<input className='add-form__input' type="text" name="name" placeholder="Увести назву списку..."
					value={title} onChange={(e) => setTitle(e.target.value)} />
				<div className='add-form__buttons'>
					<button className='add-form__btn btn' onClick={handleAddSubmit}>Додати список</button>
				</div>
			</div> 
		</div>
	);
}

