import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'


const NeedRegister = () => {
    const dispatch = useDispatch()
    return (
        <>
        <div id='empty-messagebox' className="w-full h-auto flex flex-row justify-end mb-2">
           
        </div>
        <div id="chat-list" className='w-100 h-full  flex flex-col '>

            <div id="empty-box "className="w-full h-full flex flex-col items-center justify-center text-gray-400  ">
            <i class="fas fa-comment-dots fa-6x mb-4"></i>
                <h1 className='text-5xl text-center'>Bu sayfayi gorebilmek icin giris yapmaniz gerekiyor</h1>
                <Link to='/login'>
               <div className=" btn cursor-pointer rounded-md bg-rose-800 px-6 py-5 text-xl text-gray-100 mt-8">Giris Yap</div>
               </Link>
            </div>
            <div id="chat-item"></div>

        </div>
        </>
    )
}

export default NeedRegister
