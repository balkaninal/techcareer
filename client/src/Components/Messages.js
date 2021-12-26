import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import EmptyMessageBox from './EmptyMessageBox'
import MessageBoxView from './MessageBoxView'
import Chat from './Chat'
import NewMessage from './NewMessage'


import { getMessages } from '../Redux/Actions/messagesActions'
import NeedRegister from './NeedRegister'

const Messages = () => {

    const dispatch = useDispatch()


    const {onMessages,chat} = useSelector(state => state.onPage)
    const userId = useSelector(state => state.userLogin.userInfo._id)
    const messagesState = useSelector(state => state.messages)
    const { loading, error, messages } = messagesState
    const messageList = messages
    const navigate = useNavigate();
   

    
    








    return (


        <div id='messages-wrapper' className=' w-full h-full border-opacity-10 border-2 rounded md:p-8 flex flex-col t-pr  ' >

{userId && userId == 'visitor' ? <NeedRegister /> :
        (
          <>


            
            {chat != '0' && <Chat/>}
            {onMessages == '1' &&  <MessageBoxView/>}
            {onMessages == '2' && <NewMessage/>}
            {onMessages == '3' && <EmptyMessageBox/>}


            











</>
)}

        </div >
    )
}

export default Messages
