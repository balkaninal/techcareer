import React from 'react'
import Header from '../Components/Header'
import {Link} from 'react-router-dom'

const HomeScreen = () => {
    return (
        <>

            {
                //FullPage Wrapper
            }
            <div className="full-wrapper relative w-screen h-screen flex ">

                {
                    //Background Image
                }
                <div className="bg-wrapper spacer layer1 absolute w-screen h-screen"></div>


                {


                    //FullPage Content Area
                }
                <div className="content-wrapper flex flex-col items-center w-screen h-screen t-nav">
                    <Header />

                    <div id="content" className=' w-full flex md:flex-row flex-col h-1/2 mt-10 items-center'>


                        <div id="hero-textarea" className="  h-2/3 flex flex-col items-center justify-center w-full md:w-1/2   ">
                            <div className="text-container w-4/5  flex flex-col items-center ">

                                <h1 className=' nowrap text-gray-700 mb-8 font-semibold text-5xl  '>Organ Bagisi Hayat Kurtarir</h1>
                                <p className='text-xl w-100  lg:w-3/4 text-center text-gray-800 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quasi quo officia totam ducimus tempore architecto, consequuntur praesentium maxime? Modi?</p>
                                <div id="button-area" className=" font-bold mt-10 w-full flex flex-row items-center justify-center  ">
                                <Link to='/user'>
                                    <div className="nowrap btn cursor-pointer rounded-md bg-rose-700 shadow-lg  pt-3 pb-3 pl-4 pr-4 text-gray-200 ">Donor Ol/Hasta Ekle<i class="fas fa-hands-helping fa-lg ml-4"></i></div>
                                    </Link>
                                    <div className="nowrap btn cursor-pointer rounded-md border-2 border-gray-900 shadow-lg text-gray-900 pt-3 pb-3 pl-4 pr-4  ml-2">Iletisim<i class="fas fa-pencil-alt fa-lg ml-4"></i></div>
                                </div>
                            </div>
                        </div>


                        <div id="hero" className=" h-full flex justify-center items-center md:-ml-24 w-full md:w-1/2">

                            <div className="hero w-4/5 herospacer h-full lg:w-full"></div>
                        </div>


                    </div>







                </div>




            </div>




        </>
    )
}

export default HomeScreen
