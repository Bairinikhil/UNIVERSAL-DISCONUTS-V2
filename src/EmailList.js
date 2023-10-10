
import React, { useEffect, useState } from 'react'
import './EmailList.css'
import {Checkbox}  from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RefreshIcon from '@mui/icons-material/Refresh';
import More from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import Section from './Section';
import InboxRoundedIcon from '@mui/icons-material/InboxRounded';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PeopleIcon from '@mui/icons-material/People';
import EmailRow from './EmailRow';
import { db } from './firebase';
import CheckBoxNew from '@mui/icons-material/CheckBoxOutlineBlank';
import Login from './Login';
import { useSelector } from 'react-redux';
import { selectUser } from './features/features/userSlice';



function EmailList() {

	

const [email, setEmail] =useState([]);

useEffect(() => {
db.collection("emails").orderBy("timestamp", "desc")
.onSnapshot((snapshot) =>
		setEmail(
			snapshot.docs.map((doc) => ({
				id: doc.id,
				data: doc.data(),

		}))
 	)
)
},[])



  return (
	<div className='emailList'>
		<div className='emailList-settings'>
<h4>Welcome to world of Discounts</h4>
<h3>
what is this UNIVERSAL Discounts ? <br/>
	1. UNIVERSAL DISCOUNTS is a Discount Information filter<br/>
	2.This platfrom provides best information about Discounts
	helps you to easily find all the best Discounts nearby your area and across the web.

	{/* Here you can find best offers
	and deals nearby you and across the web<br/>

	why UNIVERSAL OFFERS ?<br/>
	This platfrom provides best information about offers<br/>
	helps you to easily grasp all the best offers nearby your area<br/>
	and across the web also even you can create an offers. */}


</h3>

			{/* <div className='emailList-settingLeft'>

				<input type='checkbox'/>							
				<ArrowDropDownIcon/>				
				<RefreshIcon/>
			<More/>
				
				</div>

			
	<div className='emailList-settingRight'>
					
						<ChevronLeftIcon/>
										
						<ChevronRightIcon/>					
					
						<KeyboardIcon/>
										
						<ArrowDropDownIcon/>
					
		</div> */}
	</div>
	<div className='emialList-sections'>
		<h4>A REAL DISCOUNT NEED TO BE KNOWN</h4>

	{/* <Section Icon={InboxRoundedIcon} title='Primary' color='blue' selected />
	<Section Icon={LocalOfferIcon} title='Promotion' color='white' />
	<Section Icon={PeopleIcon} title='Social' color='white' /> */}
</div>

		<div className='emailList-List'>
			{email.map(({ id, data: {message, to, subject, timestamp,expiry}}) =>(
				<EmailRow
				id={id}
				Key={id}
				title={to}
				subject={subject}
				description={message}
				expiry={expiry}
				time={new Date(timestamp?.seconds * 1000).toUTCString()}
				/>
			))}
			
		{/* <EmailRow
			title="DACE"
			subject="Design of new model screens"
			description="All are in dinner and how about you and i am love with body iam love with your body something brand new "
			time='7:00 pm'
			>

			</EmailRow>
			<EmailRow 
			title="Universal offers"
			subject="Inverstor meeting"
			description=" i am love with body iam love with your body something brand new "
			time='6:03 pm'
			>

			</EmailRow>

			<EmailRow
			title="DACE"
			subject="Design of new model screens"
			description="All are in dinner and how about you and i am love with body iam love with your body something brand new "
			time='7:00 pm'
			>

			</EmailRow>
			<EmailRow 
			title="Universal offers"
			subject="Inverstor meeting"
			description=" i am love with body iam love with your body something brand new "
			time='6:03 pm'
			>

			</EmailRow> */}
			

			
			
			

		</div>
</div>

  )
}

export default EmailList