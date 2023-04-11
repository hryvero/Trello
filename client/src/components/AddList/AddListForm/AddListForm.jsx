import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { useState, useEffect } from 'react';

import "./style.scss"
import { useDispatch } from 'react-redux';
import { createList } from '../../../redux/actions';


export function AddListForm({ setOpen, open }) {

	const dispatch = useDispatch();
	const [title, setTitle] = useState('');



	const handleClose = () => (e) => {
		e.stopPropagation()
		setOpen(false)
	}

	const handleAddSubmit = (e) => {
		e.preventDefault();
		if (title === '') {
			return;
		}
		else {
			dispatch(createList(title));
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

