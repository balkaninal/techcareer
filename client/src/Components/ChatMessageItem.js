import React from 'react'
import PropTypes from 'prop-types'

const ChatMessageItem = props => {

    const type=props.type
    return (
        <>
          <div className={' w-full flex flex-row items-center ' + (type == 'sender' ?'justify-end':'justify-start')} >
                    <div className={"bubble-wrapper max-w-sm sm:max-w-xl md:max-w-2xl xl:max-w-3xl  rounded-3xl px-8 py-4 mb-1 text-stone-100 transition duration-300 " + (type == 'sender'? 'bg-emerald-900 hover:bg-green-800' :'bg-gray-700 hover:bg-gray-800')}>
                        <span className='text-xl t-pr font-light'>{props.text}</span>
                    </div>
                </div>  
        </>
    )
}



export default ChatMessageItem
