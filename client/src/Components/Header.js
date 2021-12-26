import React, { useState, useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { logout } from '../Redux/Actions/userActions'
import { Link, useLocation } from 'react-router-dom'
import UserNavMenu from './UserNavMenu'
const Header = () => {
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin
    const dispatch = useDispatch()
    const logoutHandler = (e) => {
        e.preventDefault()
        dispatch(logout())
        
    }
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });

    const isSticky = (e) => {
        const header = document.querySelector('#header');
        const scrollTop = window.scrollY;
        scrollTop >= window.screen.height - 200 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
    };






    return (
        <>
            <header id="header" className='w-screen h-48 t-nav shadow-lg lg:shadow-sm bg-gray-100 border-b-2 border-gray-200'>
                <div id="top-bar" className="w-full h-12 bg-gray-900 border-b-1 border-black relative flex flex-row items-center text-gray-400 text-md text-pr">
                    <div id="email" className="email ml-12 ">
                        <i class="fas fa-envelope mr-2"></i>
                        <span>inalbalkan@gmail.com</span>
                    </div>
                    <div id="phone" className="phone ml-6">
                        <i class="fas fa-phone-alt mr-2"></i>
                        <span className=''>+90 533 139 10 77</span>

                    </div>
                </div>

                <nav id="nav" className='w-4/5 m-auto  h-36 ' >{/* w-full bg-gray-100  */}
                    <div id="nav-container" className='flex h-full flex-row items-center justify-between '>
                        <Link to='/'>
                            <div id="logo" className=" items-center flex h-full text-2xl text-gray-700 t-nav text-center w-1/2 lg:w-1/5 ">
                                <i class="fas fa-hand-holding-medical fa-sm"></i>
                                <span className='text-pr ml-1 text-gray-700 font-bold'>HealthCare<span className='text-red-600'>App</span></span>
                            </div>
                        </Link>
                        <div id="navbar" className="hidden lg:flex  h-full lg:text-xl xl:text-xl t-nav flex-row w-3/5 items-center justify-center text-gray-500 ">

                            {/*}
                            <div className="cursor-pointer mr-4 nowrap anasayfa  font-bold text-gray-900 border-b-2 border-gray-500">Ana Sayfa</div>
                            <div className="cursor-pointer mr-4 nowrap anasayfa  hover:text-gray-900">Hakkimizda</div>
                            <div className="cursor-pointer mr-4 nowrap anasayfa hover:text-gray-900">Bilgi Paketi</div>
    <div className="cursor-pointer mr-4 nowrap anasayfa  hover:text-gray-900">Iletisim</div>
    */}






                        </div>
                        <div id="action" className="h-full items-center text-md flex flex-row lg:justify-center justify-end w-1/2 lg:w-1/5 ">
                            {userInfo && userInfo._id!='visitor' ? (
                                <>
                                    <div className=" font-bold btn text-lg cursor-pointer rounded-md pt-3 pb-3 pl-4 pr-4 ">{userInfo.username}</div>

                                    {<button onClick={logoutHandler} className=" btn cursor-pointer rounded-md bg-red-600 pt-3 pb-3 pl-4 pr-4 text-gray-100"> Çıkış Yap</button>}

                                </>
                            ) :
                                <>
                                    <Link to='/register'>
                                        <div className=" font-bold text-md btn cursor-pointer rounded-md pt-3 pb-3 pl-4 pr-4 underline">Kayit Ol</div>
                                    </Link>
                                    <Link to='/login'>
                                        <div className=" font-bold btn cursor-pointer rounded-md bg-red-600 pt-3 pb-3 pl-4 pr-4 text-gray-100">Giris Yap</div>
                                    </Link>
                                </>
                            }


                        </div>
                    </div>
                </nav>



            </header>

        </>
    )
}

export default Header
