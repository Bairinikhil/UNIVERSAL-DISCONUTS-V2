import React from 'react'
import './Mail.css'
import Arrowback from '@mui/icons-material/KeyboardBackspace';
import {IconButton } from '@mui/material';
import ArchiveIcon from '@mui/icons-material/Archive';
import Reportspam from '@mui/icons-material/ReportGmailerrorred';
import DeleteIcon from '@mui/icons-material/Delete';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AddTaskIcon from '@mui/icons-material/AddTask';
import DriveFileMoveIcon from '@mui/icons-material/DriveFileMove';
import LabelIcon from '@mui/icons-material/Label';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PrintIcon from '@mui/icons-material/Print';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import{ Avatar} from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import TurnLeftIcon from '@mui/icons-material/TurnLeft';
import { useDispatch, useSelector } from 'react-redux';
import { closeSendMessage, selectOpenMail } from './features/features/mailSlice';


function Mail() {
 

  const navigate = useNavigate()

    const selectedMail = useSelector(selectOpenMail)
  return (
	<div className='mail'>
    <div className='mail-tools'>
      <div className='mail-toolsLeft'>
       
          <Arrowback   onClick={()=> navigate("/") } />
       

       
        <ArchiveIcon/>
       

       
          <Reportspam/>
       

       
          <DeleteIcon />
       

        <hr className='hr-line1'/>

       
          <MailOutlineIcon/>
       

       
          <AccessTimeIcon/>
       

       
          <AddTaskIcon/>
       
        <hr className='hr-line2'/>

       
          <DriveFileMoveIcon/>
       
       
          <LabelIcon/>
       


         
            <MoreVertIcon/>
         
      </div>
      <div className='mail-toolsRight'>
       
          <ChevronLeftIcon/>
       
                   
         
            <ChevronRightIcon/>
         

         
            <KeyboardIcon/>
         
         
            <ArrowDropDownIcon/>


         
      </div>
    </div>
   <div className='mail-body'>
      <div className='mail-bodyleft'>
      <h3>{selectedMail?.subject}</h3>

      </div>
     <div className='mail-bodyRight'>
        <PrintIcon/>
        <OpenInNewIcon/>
  
      </div>

     </div>


     <div className='mail-title'>

        <div className='mail-title-left'>
               <Avatar/>
               <div className='mail-titleTag'>
                <h3>{selectedMail?.title}<span>something@gmail.com</span></h3>
                      <p>to me <ArrowDropDownIcon/> </p>
      {/* title,subject,description,time */}
               </div>
     </div>

     <div className='mail-title-right'>
     {/* This is an attachment icon so is not repeated most of the email so put its aside */}
      {/* <AttachmentIcon/> */}
     
        <StarBorderIcon/>
     
     
        <TurnLeftIcon/>
     
     
        <MoreVertIcon/>
     
    </div>
    </div>


    <div className='mail-message'>
    <p>
      {selectedMail?.description}
      </p> 
    
   </div>
   </div>

  
  
)  }

export default Mail