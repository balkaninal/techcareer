import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMessages } from '../Redux/Actions/messagesActions'

import ListWaitingLoader from './ListWaitingLoader'
import ChatItem from './ChatItem'
import moment from 'moment'
import { setMessagePage } from '../Redux/Actions/onPageActions'


const MessageBoxView = () => {
    moment.locale("tr")
    const dispatch = useDispatch()
    const userId = useSelector(state => state.userLogin.userInfo._id)
    const messagesState = useSelector(state => state.messages)
    const { loading, error, messages } = messagesState
    const messageList = messages

    useEffect(() => {
        dispatch(getMessages(userId))
    }, [dispatch, userId])




    return (
        <>

            <div id='new-message' className="w-full h-auto flex flex-row justify-end mb-2 ">
                <button onClick={()=> dispatch(setMessagePage('2'))}className=" btn cursor-pointer rounded-md bg-rose-800 px-3 py-2 text-lg text-gray-100 mt-8">  <i class="fas fa-comments mr-2"></i>Yeni Mesaj</button>
            </div>



            <div id="chat-list" className='h-full w-full flex flex-col '>

                <div id="chats-wrapper" className="w-full h-5/6 shadow overflow-x-hidden overflow-y-auto">

                    {loading ? <ListWaitingLoader /> : (
                        messageList.map(room => (
                            <ChatItem key={room._id} roomId={room._id} withUser={room.users[0].id != userId ? room.users[0].name : room.users[1].name} date={moment(room.updatedAt).fromNow()} lastMessage={room.messages[room.messages.length - 1].message} />
                        ))
                    )}












                </div>



            </div>

        </>
    )
}

export default MessageBoxView
