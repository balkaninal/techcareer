import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {chatWith, setMessagePage} from '../Redux/Actions/onPageActions'

const ChatItem = (props) => {

    const roomId = props.roomId
    const withUser = props.withUser
    const date = props.date
    const lastMessage = props.lastMessage

    const page = useSelector(state => state.onPage.onMessages)
    const dispatch = useDispatch()
    




    


    return (
        <div onClick={()=>{dispatch(chatWith(roomId));dispatch(setMessagePage(withUser))}} data={roomId} className="cursor-pointer w-full h-24 min-h-24  flex flex-row px-4 border-t border-gray-400 border-opacity-50 hover:shadow-lg ">

            <div className="user-image flex justify-items-center justify-center items-center w-12 h-full  ">
                <i class="fas fa-user-alt fa-2x text-gray-700 mr-2"> </i>
            </div>

            <div id="chat-summary" className='flex flex-col justify-center items-start  w-full h-full'>
                <span className='text-2xl ml-3  font-bold'>{withUser}</span>
                <span className='text-lg ml-3 '>{(lastMessage.length >= 155) ? lastMessage.substring(0, 155) + " ..." : lastMessage}</span>
            </div>

            <div id="time" className="w-auto w-max-24  h-full  justify-center items-center flex text-sm ">
                <span>{date}</span>
            </div>

        </div>
    )
}

export default ChatItem
