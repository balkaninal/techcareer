import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../Redux/Actions/userActions'
import Message from '../Components/Message'
import Loader from '../Components/Loader'


const LoginScreen = () => {
    return (
        <>

            <div className="full-wrapper relative w-screen h-screen flex ">

                
            <Link to='/'>
            <div id="back-to-home" className='cursor-pointer absolute top-20 left-20 flex items-center justify-center  '>
                <i className='fas  fa-chevron-left  fa-2x'></i><span className='text-xl ml-2 font-semibold'>Ana Sayfa</span>
            </div>
            </Link>

            <Link to='/login'>
            <div id="back-to-home" className='cursor-pointer absolute top-20 right-20 flex items-center justify-center  '>
            <span className='text-xl mr-2 font-semibold'>Giris Yap</span> <i className=' rotate-180 fas  fa-chevron-left  fa-2x'></i>
            </div>
            </Link>

                <div className="bg-wrapper spacer layer1 absolute w-screen h-screen"></div>
                <div className="content-wrapper flex flex-col justify-center items-center w-screen h-screen t-nav relative">

                    <div id="logoArea" className='  '>
                        <span className='text-pr text-5xl ml-1 text-gray-700 font-bold'>HealthCare<span className='text-red-600'>App</span></span>
                    </div>
                    <div id="loginArea" className='  h-4/6 t-pr   w-10/12 lg:w-2/5  flex items-center flex-col ' >
                        <div id="loginInputs" className='flex flex-col items-center w-5/6'>
                            <span className='font-bold text-lg text-gray-800'>Ad-Soyad</span>
                            <input type="text" placeholder='' className='mb-2 w-full md:w-96 h-12 rounded-lg border-2 border-gray-400 bg-gray-100 text-center outline-none' />
                            <span className='font-bold text-lg text-gray-800'>Ad-Soyad</span>
                            <input type="text" placeholder='' className='mb-2 w-full md:w-96 h-12 rounded-lg border-2 border-gray-400 bg-gray-100 text-center outline-none' />
                            <span className='font-bold text-lg text-gray-800'>Ad-Soyad</span>
                            <input type="text" placeholder='' className='mb-2 w-full md:w-96 h-12 rounded-lg border-2 border-gray-400 bg-gray-100 text-center outline-none' />
                            <span className='font-bold text-lg text-gray-800'>Ad-Soyad</span>
                            <input type="text" placeholder='' className='mb-2 w-full md:w-96 h-12 rounded-lg border-2 border-gray-400 bg-gray-100 text-center outline-none' />
                            <span className='font-bold text-lg text-gray-800'>Ad-Soyad</span>
                            <input type="text" placeholder='' className='mb-2 w-full md:w-96 h-12 rounded-lg border-2 border-gray-400 bg-gray-100 text-center outline-none' />
                            <span className='font-bold text-lg text-gray-800'>Ad-Soyad</span>
                            <input type="text" placeholder='' className='mb-2 w-full md:w-96 h-12 rounded-lg border-2 border-gray-400 bg-gray-100 text-center outline-none' />
                            <span className='font-bold text-lg text-gray-800'>Ad-Soyad</span>
                            <input type="text" placeholder='' className='mb-2 w-full md:w-96 h-12 rounded-lg border-2 border-gray-400 bg-gray-100 text-center outline-none' />

                           
                            <button type="submit" className='mb-10 w-full md:w-96 h-12 rounded-3xl text-center outline-none bg-green-700 text-gray-200'>Kayit Ol</button>
                            <div className="loginActions flex justify-center items-start flex-col w-72 text-sm text-gray-400 underline">
                                <span className='mb-2'>Zaten Uyeyim</span>

                            </div>
                        </div>
                        

                        




                    </div>



                </div>

            </div>
        </>
    )
}

export default LoginScreen
