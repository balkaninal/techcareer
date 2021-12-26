import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../Redux/Actions/userActions'
import Message from '../Components/Message'
import ListWaitingLoader from '../Components/ListWaitingLoader'
const LoginScreen = () => {


    const navigate = useNavigate();
    const [email, setEmail] = useState('inalbalkan@gmail.com')
    const [password, setPassword] = useState('123456')

    const query = useLocation().search
    const redirect = query ? query.split('=')[1] : '/'

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { loading, error, userInfo } = userLogin
    const submitHandler = (e) => {
        
        dispatch(login(email, password))
        e.preventDefault()

    }
    

    useEffect(
        () => {
            
            if (userInfo && userInfo._id !='visitor') {
                navigate('/user')
            }
        }, [userInfo, redirect,loading]
    )


    return (
        <>

            <div className="full-wrapper relative w-screen h-screen flex ">
<Link to='/'>
            <div id="back-to-home" className='cursor-pointer absolute top-20 left-20 flex items-center justify-center  '>
                <i className='fas  fa-chevron-left  fa-2x'></i><span className='text-xl ml-2 font-semibold'>Ana Sayfa</span>
            </div>
            </Link>
            <Link to='/register'>
            <div id="back-to-home" className='cursor-pointer absolute top-20 right-20 flex items-center justify-center  '>
            <span className='text-xl mr-2 font-semibold'>Kayit Ol</span> <i className=' rotate-180 fas  fa-chevron-left  fa-2x'></i>
            </div>
            </Link>


                <div className="bg-wrapper spacer layer1 absolute w-screen h-screen"></div>
                <div className="content-wrapper flex flex-col justify-center items-center w-screen h-screen t-nav relative">

                    <div id="logoArea" className='h-1/6 '>
                        <span className='text-pr text-5xl ml-1 text-gray-700 font-bold'>HealthCare<span className='text-red-600'>App</span></span>
                    </div>
                    <div id="loginArea" className=' t-pr h-3/6  w-10/12 lg:w-2/5  flex items-center flex-col ' >
                        <div id="loginInputs" className='flex flex-col items-center w-5/6'>
                            <div className="processArea mb-4">
                                {error && <Message>{error}</Message>}
                                {loading && <ListWaitingLoader />}
                            </div>
                            <span className='font-bold text-lg text-gray-800'>E-Mail</span>
                            <input type="email" placeholder='' className='mb-4 w-full md:w-96 h-12 rounded-3xl text-center outline-none' value={email} onChange={(e) => setEmail(e.target.value)} />

                            <span className='font-bold text-lg text-gray-800'>Sifre</span>
                            <input type="text" placeholder='' className='mb-10 w-full md:w-96 h-12 rounded-3xl text-center outline-none' value={password} onChange={(e) => setPassword(e.target.value)} />
                            <form onSubmit={submitHandler}>
                                <button type="submit" className='mb-10 w-full md:w-96 h-12 rounded-3xl text-center outline-none bg-green-700 text-gray-200'>Giris Yap</button>
                            </form>
                            <div className="loginActions flex justify-center items-start flex-col w-72 text-sm text-gray-400 underline">
                                <span className='mb-2'>Sifremi Unuttum</span>
                                <span className=''>Kayit Ol</span>
                            </div>
                        </div>







                    </div>



                </div>

            </div>
        </>
    )
}

export default LoginScreen
