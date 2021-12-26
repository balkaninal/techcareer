import React from 'react'

const EmptyActivity = () => {
    return (
        <>
           
           <div id="chat-list" className='w-100 h-full  flex flex-col '>
   
               <div id="empty-box "className="w-full h-full flex flex-col items-center justify-center text-gray-400  ">
               <i class="fas fa-comment-dots fa-4x"></i>
                   <h1 className='text-4xl '>Mesaj Kutusu Bos...</h1>
                   <button className=" btn cursor-pointer rounded-md bg-rose-800 px-6 py-5 text-xl text-gray-100 mt-8">Konusma Baslat</button>
               </div>
               <div id="chat-item"></div>
   
           </div>  
        </>
    )
}

export default EmptyActivity
