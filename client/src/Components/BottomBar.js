import React from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import {setMenuPage,setProfileRequest} from '../Redux/Actions/onPageActions'

const BottomBar = () => {
    const dispatch = useDispatch()
    const userId = useSelector(state => state.userLogin.userInfo._id)
    return (
        <>

            <div className="w-full h-auto mt-24 lg:hidden">
                <section id="bottom-navigation" className=" block fixed inset-x-0 bottom-0 z-10 bg-white  border-t-2 shadow-lg"> {/* if shown only tablet/mobile*/}
                    
                        <div id="tabs" className="flex justify-between">
                            <div onClick={()=>dispatch(setMenuPage('1'))} className="w-full  bg-blackfocus:text-rose-600 hover:text-rose-600 text-gray-800 justify-center inline-block text-center pt-2 pb-1">
                            <i class="fas fa-clipboard-list fa-2x"></i>
                                <span className="tab tab-home block text-xs">Donor Listesi</span>
                            </div>


                            <div onClick={()=>dispatch(setMenuPage('2'))} className="w-full focus:text-rose-600 hover:text-rose-600 text-gray-800 justify-center inline-block text-center pt-2 pb-1">
                            <i class="fas fa-hourglass-half fa-2x"></i>
                                <span className="tab tab-kategori block text-xs">Bekleme Listesi</span>
                            </div>
                            <div onClick={()=>dispatch(setMenuPage('3'))} className="w-full focus:text-rose-600 hover:text-rose-600 text-gray-800 justify-center inline-block text-center pt-2 pb-1">
                            <i class="fas fa-user-plus fa-2x"></i>
                                <span className="tab tab-explore block text-xs">Yeni Talep</span>
                            </div>
                            <div onClick={()=>dispatch(setMenuPage('4'))}  className="w-full focus:text-rose-600 hover:text-rose-600 text-gray-800 justify-center inline-block text-center pt-2 pb-1">
                            <i class="fas fa-comments fa-2x"></i>
                                <span className="tab tab-whishlist block text-xs">Meajlar</span>
                            </div>
                            <div  onClick={() =>  {dispatch(setMenuPage('5')) ;dispatch(setProfileRequest(userId))}}  className="w-full focus:text-rose-600 hover:text-rose-600 text-gray-800 justify-center inline-block text-center pt-2 pb-1">
                            <i class="fas fa-id-card fa-2x"></i>
                                <span className="tab tab-account block text-xs">Profil</span>
                            </div>


                            <div onClick={()=>dispatch(setMenuPage('6'))} href="#" className="w-full focus:text-rose-600 hover:text-rose-600 text-gray-800 justify-center inline-block text-center pt-2 pb-1">
                            <i class="fas fa-cog fa-2x"></i>
                                <span className="tab tab-account block text-xs">Ayarlar</span>
                            </div>
                        </div>
                    </section>
            </div>



        </>
    )
}

export default BottomBar
