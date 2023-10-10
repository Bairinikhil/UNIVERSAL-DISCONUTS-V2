import React from 'react'
import "./SendMail.css"
import MinimizeIcon from '@mui/icons-material/Minimize';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import CloseIcon from '@mui/icons-material/Close';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import { IconButton } from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import LockClockIcon from '@mui/icons-material/LockClock';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/features/mailSlice';
import { db } from './firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


function SendMail() {
	const dispatch = useDispatch()
		const {register, handleSubmit, watch, errors}= useForm();

		const onSubmit=(fromdata)=>{
			// console.log(fromdata)
			db.collection('emails').add({
				to: fromdata.to,
				subject:fromdata.subject,
				message:fromdata.message,
				expiry:fromdata.expiry,
				timestamp: firebase.firestore.FieldValue.serverTimestamp(),

			})
			dispatch(closeSendMessage())
		}

  return (
	<div className='sendMail'>
		<div className='sendMail-header'>
			<h2>Offer card</h2>			
			{/* <MinimizeIcon/>			
			<OpenInFullIcon/> */}
			<CloseIcon

			 style={{ backgroundColor: 'initial' }}
      onMouseEnter={(e) => e.target.style.backgroundColor = 'red'}
      onMouseLeave={(e) => e.target.style.backgroundColor = 'initial'}
			
			
			
			onClick={() => dispatch(closeSendMessage())} />
			
			 
		</div>

		<form onSubmit={handleSubmit(onSubmit)}>
			<input className='To' placeholder='Product' type="text" {...register('to',{required:true})} />
			
			<input className='subject ' placeholder='$ Price' type="number" {...register('subject',{required:true})} />
			
			<input   className='Matter' placeholder='Loction' type="text" {...register('message',{required:true})} />

			<input  className='expiryDate' placeholder='Month/Day/Year'   type="date" {...register('expiry',{required:true})}  />

			<div className='sendMail-options'>

				<button className='button'>
					<h2>Send</h2>
					{/* <hr/>
				<ArrowDropDownIcon className='icon'/> */}
				</button>
				
					{/* <FormatColorTextIcon/>
				
				
					<AttachFileIcon/>
				
				
					<InsertLinkIcon/>
				
				
					<SentimentSatisfiedIcon/>
				
				
					<AddToDriveIcon/>
				
				
					<CropOriginalIcon/>
				
				
					<LockClockIcon/>
				
				
					<MoreVertIcon/>
				
				<div className='bin'>
				
					<DeleteOutlineIcon/>
				

				</div> */}

			</div>
		</form>
	</div>
  )
}

export default SendMail