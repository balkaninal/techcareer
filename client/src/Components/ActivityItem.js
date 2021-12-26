import React from 'react'
import { useDispatch } from 'react-redux'
import {setMenuPage,setPostId} from '../Redux/Actions/onPageActions'
const ActivityItem = (props) => {

    const dispatch = useDispatch()

    const clickHandler = ()=>{
        dispatch(setPostId(props.id))
        dispatch(setMenuPage('post'))
    }
    
    return (
        <>
            <div onClick={clickHandler} id="activity-item" className="cursor-pointer w-full h-24 min-h-24 bg-gray-100 flex flex-row px-4 border-y border-gray-400 border-opacity-80 hover:shadow-lg hover:bg- ">

                <div className="user-image flex justify-items-center justify-center items-center w-12 h-full  ">
                    <i class="fas fa-pencil-alt fa-2x text-gray-700 mr-2"> </i>
                </div>

                <div id="post-summary" className='flex flex-col justify-center items-center md:items-start  w-full h-full'>
                    <span id="title" className='text-2xl ml-3  font-bold'>{props.title}</span>
                    <span id="desc" className='text-sm ml-3 '>{props.desc}</span>
                </div>

                <div id="time" className="w-auto w-max-24  h-full  justify-center items-center flex text-sm ">
                    <span>{props.time}</span>
                    
                </div>

            </div>
        </>
    )
}

export default ActivityItem
