import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../Components/Header'
import List from '../Components/List'
import Messages from '../Components/Messages'
import WaitingListForm from '../Components/WaitingListForm'

import { useDispatch, useSelector } from 'react-redux'

import Profile from '../Components/Profile'
import BottomBar from '../Components/BottomBar'
import { setMenuPage, setProfileRequest } from '../Redux/Actions/onPageActions'
import PostArea from '../Components/PostArea'
import NeedRegister from '../Components/NeedRegister'







const HomeScreen = () => {
    const onPage = useSelector(state => state.onPage)
    const dispatch = useDispatch()


    const navigate = useNavigate();
    const userLogin = (useSelector(state => state.userLogin))
    const userId = userLogin.userInfo._id


    const { onMenu, onMessages } = onPage



    useEffect(() => {

        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };


    });

    const isSticky = (e) => {
        const menu = document.querySelector('#menu-items');
        const scrollTop = window.scrollY;
        scrollTop >= 500 ? menu.classList.add('is-sticky-menu') : menu.classList.remove('is-sticky-menu');
    };


    return (
        <>

            {
                //FullPage Wrapper
            }
            <div className="full-wrapper relative w-screen h-screen flex overflow-x-hidden ">

                {
                    //Background Image
                }



                {
                    //FullPage Content Area
                }
                <div className="content-wrapper flex flex-col items-center w-screen h-screen t-nav">
                    <Header />

                    <div id="content" className=' mt-16 w-11/12 h-full  flex flex-row '
                    >
                        <div id="menu-container" className="hidden lg:block w-2/6 h-4/6  items-center border-r-2 border-gray-600 border-opacity-30">

                            <div id="menu-text" className="text-gray-900 h-36 items-center justify-center px-10 text-4xl t-pr flex">Menu Context</div>

                            <div id="menu-items" class=" flex flex-col items-center w-full h-auto ">


                                <div onClick={() => dispatch(setMenuPage('1'))} className={'menuItemContainer cursor-pointer shadow-md border-2 border-transparent rounded  flex flex-row  w-96 h-16 items-center mb-1 hover:shadow-md hover:border-2 hover:border-gray-500 transition-all duration-500 ' + (onMenu == '1' ? (' bg-rose-800 text-gray-300') : ' bg-gray-300 text-gray-900')}>
                                    <div className="menuItemIcon  w-16 h-16 mr-4 flex items-center justify-center ">
                                        <i className='fas fa-user fa-2x'></i>
                                    </div>
                                    <div className="menuItemText  w-4/6 h-12 flex items-center justify-start">
                                        <span className='text-xl'> Donör ve Bağışcı Listesi</span>
                                    </div>
                                </div>

                                <div onClick={() => dispatch(setMenuPage('2'))} className={'menuItemContainer cursor-pointer shadow-md border-2 border-transparent rounded  flex flex-row  w-96 h-16 items-center mb-1 hover:shadow-md hover:border-2 hover:border-gray-500' + (onMenu == '2' ? (' bg-rose-700 text-gray-300') : ' bg-gray-300 text-gray-900')}>
                                    <div className="menuItemIcon  w-16 h-16 mr-4 flex items-center justify-center ">
                                        <i className='fas fa-user fa-2x'></i>
                                    </div>
                                    <div className="menuItemText  w-4/6 h-12 flex items-center justify-start">
                                        <span className='text-xl'>Nakil/Bağış Bekleme Listesi</span>
                                    </div>
                                </div>

                                <div onClick={() => dispatch(setMenuPage('3'))} className={'menuItemContainer cursor-pointer shadow-md border-2 border-transparent rounded  flex flex-row  w-96 h-16 items-center mb-1 hover:shadow-md hover:border-2 hover:border-gray-500' + (onMenu == '3' ? (' bg-rose-700 text-gray-300') : ' bg-gray-300 text-gray-900')}>
                                    <div className="menuItemIcon  w-16 h-16 mr-4 flex items-center justify-center ">
                                        <i className='fas fa-user fa-2x'></i>
                                    </div>
                                    <div className="menuItemText  w-4/6 h-12 flex items-center justify-start">
                                        <span className='text-xl'> Yeni Talep Ekle</span>
                                    </div>
                                </div>

                                <div onClick={() => dispatch(setMenuPage('4'))} className={'menuItemContainer cursor-pointer shadow-md border-2 border-transparent rounded  flex flex-row  w-96 h-16 items-center mb-1 hover:shadow-md hover:border-2 hover:border-gray-500' + (onMenu == '4' ? (' bg-rose-700 text-gray-300') : ' bg-gray-300 text-gray-900')}>
                                    <div className="menuItemIcon  w-16 h-16 mr-4 flex items-center justify-center ">
                                        <i className='fas fa-user fa-2x'></i>
                                    </div>
                                    <div className="menuItemText  w-4/6 h-12 flex items-center justify-start">
                                        <span className='text-xl'>Mesajlarim</span>
                                    </div>
                                </div>

                                <div onClick={() => { dispatch(setMenuPage('5')); dispatch(setProfileRequest(userId && 'visitor')) }} className={'menuItemContainer cursor-pointer shadow-md border-2 border-transparent rounded  flex flex-row  w-96 h-16 items-center mb-1 hover:shadow-md hover:border-2 hover:border-gray-500' + (onMenu == '5' ? (' bg-rose-700 text-gray-300') : ' bg-gray-300 text-gray-900')}>
                                    <div className="menuItemIcon  w-16 h-16 mr-4 flex items-center justify-center ">
                                        <i className='fas fa-user fa-2x'></i>
                                    </div>
                                    <div className="menuItemText  w-4/6 h-12 flex items-center justify-start">
                                        <span className='text-xl'>Profilim</span>
                                    </div>
                                </div>
                                <div onClick={() => dispatch(setMenuPage('6'))} className={'menuItemContainer cursor-pointer shadow-md border-2 border-transparent rounded  flex flex-row  w-96 h-16 items-center mb-1 hover:shadow-md hover:border-2 hover:border-gray-500' + (onMenu == '6' ? (' bg-rose-700 text-gray-300') : ' bg-gray-300 text-gray-900')}>
                                    <div className="menuItemIcon  w-16 h-16 mr-4 flex items-center justify-center ">
                                        <i className='fas fa-user fa-2x'></i>
                                    </div>
                                    <div className="menuItemText  w-4/6 h-12 flex items-center justify-start">
                                        <span className='text-xl'> Ayarlar</span>
                                    </div>
                                </div>








                            </div>
                        </div>
                        <div id="main-container" className="w-full h-full -mt-4  ">

                            {onMenu === '1' && (<List filter='1' />)}
                            {onMenu === '2' && (<List filter='2' />)}




                            {onMenu === '3' && (<WaitingListForm />)}
                            {onMenu === '4' && (<Messages />)}
                            {onMenu === '5' && (<Profile />)}
                            {onMenu === 'post' && (<PostArea />)}



                        </div>




                    </div>









                </div>

            </div>

            <BottomBar />
        </>
    )
}

export default HomeScreen
