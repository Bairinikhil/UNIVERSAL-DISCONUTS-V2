import { Button } from '@mui/material'
import SidebarOptions from './SidebarOptions';

import React from 'react'
import './sidebar.css'
import Edit from '@mui/icons-material/ModeEditOutlineRounded';
import InboxRoundedIcon from '@mui/icons-material/InboxRounded';
import Star from '@mui/icons-material/StarOutlineRounded';
import Time from '@mui/icons-material/AccessTimeRounded';
import Send from '@mui/icons-material/SendRounded';
import Draft from '@mui/icons-material/InsertDriveFileRounded';
import ExpandMore from '@mui/icons-material/ExpandMoreRounded';
import { openSendMessage } from './features/features/mailSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';


import PublicIcon from '@mui/icons-material/Public';
import Walk from '@mui/icons-material/DirectionsWalk';
import City from '@mui/icons-material/LocationCity';
import FlagIcon from '@mui/icons-material/Flag';
import Online from '@mui/icons-material/Phonelink';

function Sidebar() {
	const dispatch = useDispatch();
  return (

	<div className='sidebar'>		
		{/* <button
		onClick={() => dispatch(openSendMessage())}
		className='compose'><Edit/>Compose</button> */}
		<SidebarOptions Icon={Walk} title='Near by you'  selected={false}></SidebarOptions>
		<SidebarOptions Icon={City} title='City' selected={false}></SidebarOptions>
		<SidebarOptions Icon={FlagIcon} title='Country'  selected={false}></SidebarOptions>
		<SidebarOptions Icon={PublicIcon} title='World' selected={false}></SidebarOptions>
		<SidebarOptions Icon={Online} title='Ecommerce' selected={false}></SidebarOptions>
		{/* <SidebarOptions Icon={ExpandMore} title='More' number='8' selected={false}></SidebarOptions> */}
	</div>

  )
}

export default Sidebar