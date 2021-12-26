import React from 'react'

const MessageReceiver = (message) => {
    return (
        <>
            <div id="receiver" className=' w-full flex flex-row items-center justify-end  '>
                    <div className="bubble-wrapper max-w-sm sm:max-w-xl md:max-w-2xl xl:max-w-3xl  rounded-3xl px-8 py-4 mb-1 bg-emerald-900 hover:bg-green-800 text-stone-100 transition duration-300">
                        <span className='text-xl t-pr font-light'>{this.props.message}</span>
                    </div>
                </div>
        </>
    )
}

export default MessageReceiver
