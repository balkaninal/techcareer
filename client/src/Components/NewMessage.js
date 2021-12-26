import React, { useState, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { setMessagePage,createMessage} from '../Redux/Actions/onPageActions'

import MessageSender from './ChatMessageItem'
const NewMessage = () => {
    const userId = useSelector(state => state.userLogin.userInfo._id)
    const dispatch = useDispatch()
    const [target, setTarget] = useState('')
    return (
        <>
        <div onClick={()=>{dispatch(setMessagePage('1'))}}className="back cursor-pointer flex flex-row justify-start -mt-8 mb-4 items-center">
                <i className='fas  fa-chevron-left  fa-3x'></i>
                <div className='text-xl ml-2 font-semibold'>Mesajlar</div>
            </div>
           


            <div className="w-full shadow-lg rounded-xl mt-12 h-1/2 bg-gray-100 flex flex-col items-center justify-center">
                <i class="far fa-comment-dots fa-10x mb-8 opacity-20"></i>
                <input onChange={(e) => setTarget(e.target.value)}className=" text-xl text-center placeholder-gray-800 bg-gray-300 w-96 h-12 rounded-2xl text-black" type="text" name="" id="" placeholder='Kullanici Adi ya da ID numarasi girin' />
                <button onClick={()=>{dispatch(createMessage({sender:userId,receiver:target}))}} className='px-6 py-2 bg-emerald-700 text-gray-100 rounded-lg mt-4 text-xl'>Sohbeti Baslat</button>
            </div>




        </>



    )
}

export default NewMessage
