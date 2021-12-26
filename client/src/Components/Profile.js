import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ActivityItem from './ActivityItem'
import EmptyActivity from './EmptyActivity'
import { setProfileRequest, getProfile } from '../Redux/Actions/onPageActions'
import ListWaitingLoader from './ListWaitingLoader'
import NeedRegister from './NeedRegister'


const Profile = () => {
    const dispatch = useDispatch()
    const userId = useSelector(state => state.onPage.profileRequest)
    const userInfo = useSelector(state => state.userLogin.userInfo)
    const profile = useSelector(state => state.onPage.profile)
    const { error, loading, profileData } = profile


    useEffect(
        () => {
            if (userId =! 'visitor'){
                dispatch(getProfile(userId))
            }
            


        }, [dispatch, userId]
    )




    //const userLogin = useSelector(state => state.userLogin)
    //const { profile } = userLogin













    return (
        <>
            <div id="profile-wrapper" className="w-full h-full  p-2 md:px-8 md:py-16 overflow-y-visible md:overflow-y-hidden">
            {userInfo && userInfo._id == 'visitor' ? <NeedRegister /> :
        (
          <>
                {loading ? <ListWaitingLoader /> : (
                    <>
                        <div id="profileBar" className='w-full h-24 bg-gray-100  mb-1'>

                            <div id="user-name " className="cursor-pointer flex flex-row h-full w-full justify- items-center">

                                <div className="user-image flex justify-items-center justify-center items-center w-24 h-full  ">
                                    <i class="fas fa-user-alt fa-3x text-gray-700"> </i>
                                </div>
                                <div className="flex flex-col justify-center mt-4 h-full">
                                    <span className='text-2xl'>{profileData.username || 'asd'}</span>
                                    <span className='ml-7 text-md'>{'#' + profileData._id}</span>
                                </div>


                            </div>

                        </div>

                        <div id="user-profile-card" className='w-full h-96  shadow-xl mb-1 flex flex-col md:flex-row'>

                            <div id="user-info-area" className='w-full md:w-1/2  flex flex-col text-black items-start justify-center pt-8 text-xl bg-gray-100 pb-8'>





                                <div id="name-wrapper" className='w-full flex flex-row items-center justify-center'>
                                    <div className="w-1/2 py-1 font-bold flex justify-end items-center mr-5">Ad Soyad</div>
                                    <div className="w-1/2 py-1   flex justify-start items-center">{profileData.name || "Belirtilmemiş"}</div>
                                </div>
                                <div id="name-wrapper" className='w-full flex flex-row items-center justify-center'>
                                    <div className="w-1/2 py-1 font-bold flex justify-end items-center mr-5">Mobil</div>
                                    <div className="w-1/2 py-1   flex justify-start items-center">{profileData.mobile || "Belirtilmemiş"}</div>
                                </div>
                                <div id="name-wrapper" className='w-full flex flex-row items-center justify-center'>
                                    <div className="w-1/2 py-1 font-bold flex justify-end items-center mr-5">Kan Grubu</div>
                                    <div className="w-1/2 py-1   flex justify-start items-center">{profileData.bloodType || "Belirtilmemiş"}</div>
                                </div>
                                <div id="name-wrapper" className='w-full flex flex-row items-center justify-center'>
                                    <div className="w-1/2 py-1 font-bold flex justify-end items-center mr-5">Şehir</div>
                                    <div className="w-1/2 py-1   flex justify-start items-center">{profileData.city || "Belirtilmemiş"} </div>
                                </div>
                               
                                <div id="name-wrapper" className='w-full flex flex-row items-center justify-center'>
                                    <div className="w-1/2 py-1 font-bold flex justify-end items-center mr-5">Donor</div>
                                    <div className="w-1/2 py-1   flex justify-start items-center">{profile.isDonor ? <i className='fas fa-check fa-lg text-green-700'></i> : <i className='hover:transition   fas fa-times fa-lg text-red-700'></i>}</div>
                                </div>
                                <div id="name-wrapper" className='w-full flex flex-row items-center justify-center'>
                                    <div className="nowrap w-1/2 py-1 font-bold flex justify-end items-center mr-5">Bekleme Listesinde</div>
                                    <div className="w-1/2 py-1   flex justify-start items-center"><i className='hover:transition   fas fa-times fa-lg text-red-700'></i></div>
                                </div>
                            





                            </div>







                            <div id="user-activity-area" className=' w-full md:w-2/3 h-auto  md:border-l border-gray-900 md:overflow-x-scroll overflow-y-visible  bg-gray-100 pb-6'>

                                <div id="profileBar" className=' block w-full h-24 bg-gray-100   border-opacity-50 -mb-2'>

                                    <div id="user-name " className="cursor-pointer flex flex-row h-full w-full justify-center items-center">

                                        <div className="user-image flex justify-items-center justify-center items-center pr-4 h-full  ">
                                            <i class="fas fa-history fa-2x text-gray-700"> </i>
                                        </div>
                                        <div className="flex flex-col justify-center  h-full">
                                            <span className='text-2xl'>Yapilan Islemler</span>
                                        </div>



                                    </div>
                                    {/*Activity Item Area*/}
                                    {
                                        profileData.posts.map(post => (
                                            <ActivityItem id={post._id} key={post._id}title={post.title} desc={post.desc.length >=60 ? post.desc.substring(0,60) + " ..." : post.desc} time={post.createdAt} />
                                        ))
                                    }







                                </div>















                            </div>
                        </div>
                    </>
                )}
                </>
                )}
            </div>
        </>
    )
}

export default Profile
