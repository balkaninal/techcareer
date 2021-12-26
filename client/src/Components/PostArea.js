import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSinglePost, setPostId,setMessagePage,setMenuPage } from '../Redux/Actions/onPageActions'
import ListWaitingLoader from './ListWaitingLoader'
const PostArea = () => {
    const dispatch = useDispatch()
    

    const postId = useSelector(state => state.onPage.postRequest)
    const { loading, error, post } = useSelector(state => state.onPage.viewPost)
    const userInfo = useSelector(state => state.userLogin.userInfo)
    console.log(post)

    useEffect(() => {
        dispatch(getSinglePost(postId))
    }, [dispatch, postId])

   


   

    return (
        <>
        <div onClick={()=>{dispatch(setMenuPage('1'))}}className="back cursor-pointer flex flex-row justify-start -mt-8 mb-4 items-center">
                <i className='fas  fa-chevron-left  fa-3x'></i>
                <div className='text-xl ml-2 font-semibold'>Listeler</div>
            </div>
            <div id className="  t-pr lg:mx-12 mt-0 lg:mt-24 overflow-hidden  w-full   h-auto pb-12  rounded-xl border-2 border-gray-400 border-opacity-50 shadow-md bg-gray-50 p-8 flex flex-col items-center justify-start relative mb-2">

                {}
                {loading ? <ListWaitingLoader /> : (error ? 'HATA' : (
                    (
                        <>
                            <div id="title" className='font-bold text-3xl capitalize mb-8 text-rose-800'>{post.title}</div>
                            <div className="text-2xl lg:px-8 p-1 mb-8 text-gray-700"><p>{post.desc}</p></div>

                            <div id="iletisim" className=' font-bold w-full h-auto text-2xl border-t border-gray-300 flex items-center flex-col pt-8'>
                                <div className="font-bold text-gray-800">İletişim Bilgileri</div>
                                <div id="name" className='capitalize'>  {post.name || 'er'}</div>
                                <div id="mobile"> Telefon Numarasi : {userInfo && userInfo._id == 'visitor' ?  <span className='text-red-900 font-bold'> Bu alani gorebilmek icin giris yapmalisiniz</span> : post.mobile}</div>
                                <div onClick={() => dispatch(setPostId('1234'))} className='cursor-pointer mt-2 px-4 py-2 bg-green-900 text-gray-100 w-auto text-lg text-center rounded'><span className=" font-bold ">Kullaniciya Mesaj Gonder</span></div>


                            </div>
                        </>
                    )))
                }
            </div>
        </>
    )
}

export default PostArea
