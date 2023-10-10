import React from 'react'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import logo from './GL.png'
import {Avatar} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import TuneIcon from '@mui/icons-material/Tune';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/features/userSlice';
import { auth } from './firebase';
import logo22 from './logo2.png'
import Ulogo from  './U.jpg'

import IconButton from '@mui/material/IconButton';
import { openSendMessage } from './features/features/mailSlice';

import LogoutIcon from '@mui/icons-material/Logout';
import Exit from '@mui/icons-material/ExitToApp';

function Header() {


	const user = useSelector(selectUser)
	const dispatch = useDispatch()

	const signOut = () => {
			auth.signOut().then(()=>{
				dispatch(logout())
			})
	}


return (
			
<div className='header'>

<div className='Header-Left'>
    {/* <MenuIcon className='baricon'/>
<img src={logo22} alt="icon"/> */}
 </div>

<div className='Header-middle'>
<img src={Ulogo} />
<h4>UNIVERSAL DISCOUNTS</h4>

	{/* <SearchIcon/>
	<input placeholder='Search mail' type='text'/>
	<TuneIcon className='header__filter' /> */}

     </div>
	
     <div className='Header-Right'>
		<button  onClick={() => dispatch(openSendMessage())} >Create Discount</button>		
		<HelpOutlineIcon/>
		<Exit onClick={signOut} />
		{/* <Avatar onClick={signOut} style={{objectfit:'',height: '30px', width: '30px' }} /> */}		  
</div>
	</div>

)
}

export default Header