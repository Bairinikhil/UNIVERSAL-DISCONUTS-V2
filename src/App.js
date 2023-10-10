import React, { useEffect } from 'react';
import './App.css';
import Header from './Header'
import Sidebar from './Sidebar';
import {BrowserRouter as Router, Routes, Route} from  'react-router-dom'
import Mail from './Mail';
import EmailList from './EmailList';
import SendMail from './SendMail';
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/features/mailSlice';
import { login, selectUser } from './features/features/userSlice';
import Login from './Login';
import { auth } from './firebase';
import Header2 from './Header2'

function App() {
 

  const user = useSelector(selectUser)
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
  const dispatch = useDispatch();


useEffect(()=>{
  auth.onAuthStateChanged((user)=>{
    if(user){
      dispatch(
        login({
          displayName: user.displayName,
          email:user.email,
          photoUrl:user.photoURL,
        })
      )
    }
  })

},[])

  return (
    
    <Router>

{!user ? (

<Login/>

):(

    <div className="App">
      {/* <header className="App-header"> */}
        <Header/>
        <div className='app_body'>
        <Sidebar/>

        <Routes>
          <Route path="/mail" element={<Mail/>}>
           
          </Route >

          <Route path="/" element={<EmailList/>} >
          </Route>

        </Routes>
       

        </div>
       {sendMessageIsOpen && <SendMail/>}

    </div>
)} 

    </Router>
  );
}

export default App;