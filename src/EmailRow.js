import React, { useState } from 'react'
import './EmailRow.css'
import { Checkbox, IconButton } from '@mui/material'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import {useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectMail } from './features/features/mailSlice';
import { selectUser } from './features/features/userSlice';
import LikeButton from './LikeButton';

import Like from '@mui/icons-material/ThumbUpOffAlt';

function EmailRow({id,title,subject,description,time,expiry}) {



const user = useSelector(selectUser)

	const navigate = useNavigate()
	const dispatch = useDispatch()

	const openMail =()=>{
		dispatch(selectMail({id,title,subject,description,time})

		)
		navigate("/mail")
	}




  return (
// here is used to be this code its from my gmail-clone but then later i custimizzed it to 
// unviersal offer site bx this is similar to that format on click the fimction will open the openMail page

	// <div onClick={openMail}  className='emailRow'>
		<div  className='emailRow'>
		<div className='emailRow-options'>
				<h4>
					{user.displayName}
				</h4>
				<h5><span>posted on - {" "}</span>
					{time}
				</h5>

			{/* <input type='checkbox'></input>			
				<StarBorderIcon/>
		 */}
		</div>


		<div className='emailRow-title'>
			<div className='product'>
			<h4>
				Product
			</h4>
		<h3>{title}</h3>
			</div>
		<div className='emailRow-price'>
			<div className='price' >
			<h4>Price</h4>
			<h3>${" "}{subject}</h3>
			</div>

			<div className='MRP'>
			<h3>MRP: <span>$36</span></h3>
			</div>

		</div>
		<div className='emailRow-Location'>
		 		<h4>
					Location
				</h4>
				<h3>

				{description}				
				</h3>

		</div>
		<div className='expiry'>
			<h4>Expiry Time</h4>
			<h3>
			{expiry}

			</h3>
		</div>

			{/* {user.displayName} */}
		</div>


		{/* <div className='emailRow-message'>
			<h4>
				{subject}{"  -  "}{expiry}
				<span className='emailRow-description'>{description}</span>
				</h4>
		</div> */}


		<div className='emailRow-time'>
			<LikeButton />

			
		</div>
	</div>
  )
}

export default EmailRow