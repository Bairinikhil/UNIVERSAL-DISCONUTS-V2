import React from 'react'
import './login.css'
import logo from './G.png'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import { useDispatch } from 'react-redux';
import {auth, provider} from './firebase'
import { login } from './features/features/userSlice';
import universaloffers from './Universal offers Logo.jpg'

function Login() {
	const dispatch = useDispatch();

	const signIn = () =>{
		console.log('hello')
		auth.signInWithPopup(provider)
.then(({ user }) =>{
			dispatch(
				login({
					displayName: user.displayName,
					email: user.email,
					photoUrl: user.photoURL,
				})

			)
		})
		.catch(error => alert(error.message))
	}

  return (

	<div className='Login'>

		<div className='login-header'>

		<img src={universaloffers}/>

		<h3>Let's explore the world of offers 
			and find the one's nearby you <span onClick={signIn} >lets go</span></h3>
		<button onClick={signIn} >Come In</button>

		</div>
		{/* <div className='options'>
			<AccountCircleIcon  onClick={signIn} />
			<h2 onClick={signIn} >Use another account</h2>
		</div>*/}		
	</div>
  )
}

export default Login