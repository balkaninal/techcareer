
import MessageSender from './ChatMessageItem'
import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import ChatMessageItem from './ChatMessageItem'
import { setMessagePage ,chatWith} from '../Redux/Actions/onPageActions'
import { addMessage, } from '../Redux/Actions/chatActions'



const Chat = () => {


    const dispatch = useDispatch()

    const userId = useSelector(state => state.userLogin.userInfo._id)
    const messagesState = useSelector(state => state.messages)
    const { messages } = messagesState

const withUser = useSelector(state => state.onPage.onMessages)

    const messageList = messages
    const roomId = useSelector(state => state.onPage.chat)
    

    const filteredChat = messageList.filter(function (room) {
        return room._id == roomId ? true : false
    })[0]

    const chatMessages = filteredChat.messages
    const receiverId = filteredChat.users[0].id != userId ? filteredChat.users[0].id : filteredChat.users[1].id
    const senderId = userId

    const [messageText, setMessageText] = useState('')
    const [placeholder, setPlaceHolder] = useState('Mesajınızı Yazın...')

    

    const sendButtonHandler = (e) => {

        if (messageText.length == 0) {
            setPlaceHolder('Boş Mesaj Gönderilemez')
            return false
        }

        const message = {
            sender: senderId,
            receiver: receiverId,
            message: messageText,
            time: Date.now()
        }
        chatMessages.push(message)
        dispatch(setMessagePage('onchat'))
        const end = document.getElementById('endMessages')
        end.scrollIntoView({ behavior: "smooth" });
        
        //dispatch(addMessage(message))



    }














    return (
        <>
            <div onClick={()=>{dispatch(setMessagePage('1'));dispatch(chatWith('0'))}}className="back cursor-pointer flex flex-row justify-start -mt-8 mb-4 items-center">
                <i className='fas  fa-chevron-left  fa-3x'></i>
                <div className='text-xl ml-2 font-semibold'>Mesajlar</div>
            </div>







            <div id="userInfoBar" className='w-full h-24 bg-gray-100 shadow-2xl mb-1'>


                <div id="user-name " className="cursor-pointer flex flex-row h-full w-full justfify-start items-center">

                    <div className="user-image flex justify-items-center justify-center items-center w-24 h-full  ">
                        <i class="fas fa-user-alt fa-3x text-gray-700"> </i>
                    </div>
                    <span className='text-2xl'>{withUser}</span>

                </div>

            </div>
            <div id="chatScreen" className="w-full shadow-md min-h-[30rem] max-h-[34rem] bg-gray-100 p-8 flex flex-col overflow-y-auto relative ">
                {/*sender and receiver area */}
                {
                    chatMessages.map(message => (
                        <ChatMessageItem type={userId == message.sender ? 'sender' : 'receiver'} text={message.message} />
                    ))
                }




                <div id='endMessages' className="absolute bottom-0"></div>
            </div>

            <div id="type-area" className="w-full h-24 flex flex-row items-center py-4 ">

                <div id="textarea" className='w-full h-full text-xl '>
                    <input onChange={(e) => setMessageText(e.target.value)} className=" rounded-xl shadow-md px-4 font-bold text-pr w-full h-full" type="text" name="" id="" placeholder={placeholder} />
                </div>

                <div id="send-button" className='w-auto ml-4  h-full flex items-center justify-center '>
                    <button onClick={sendButtonHandler} className='hover:shadow-lg shadow-md rounded-full w-16 h-16 bg-emerald-900'><i class="fas fa-share fa-lg text-gray-100"></i></button>
                </div>
            </div>

        </>
    )
}

export default Chat
