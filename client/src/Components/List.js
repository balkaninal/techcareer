import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPostList } from '../Redux/Actions/listActions'

import ListItem from './ListItem'
import ListWaitingLoader from './ListWaitingLoader'
import EmptyList from './EmptyList'


const List = (props) => {
  const dispatch = useDispatch()
  var pages
  const [bloodFilter, setBloodFilter] = useState(false)
  const [organFilter, setOrganFilter] = useState(false)
  const [boneFilter, setBoneFilter] = useState(false)

  const [cityFilter, setCityFilter] = useState('all')
  const [bloodTypeFilter, setBloodTypeFilter] = useState('all')
  const [organTypeFilter, setOrganTypeFilter] = useState('all')

  const [listPage, setListPage] = useState(1)
  const [pageCount, setPageCount] = useState(1)




  const postList = useSelector(state => state.postList)
  const { loading, error, posts } = postList
  var filteredPosts = postList

  useEffect(
    () => {
      dispatch(getPostList())
      pages=Math.floor(filteredPosts.length/10)+1
      setPageCount(pages)
    

    }, [dispatch]
  )

  const filterHandler = () => {

    filteredPosts = posts.filter(function (post) {
      let type = post.type
      let kind = post.kind
      let city = post.city ? post.city : 'all'
      let bloodtype = post.bloodType ? post.bloodType : 'all'
      let organtype = post.organ ? post.organ : 'all'


      return (kind == props.filter) &&
        ((type == '1' && bloodFilter) || (type == '2' && organFilter) || (type == '3' && boneFilter) || (!bloodFilter && !boneFilter && !organFilter)) &&
        (cityFilter == 'all' ? true : cityFilter == city) &&
        (bloodTypeFilter == 'all' ? true : bloodTypeFilter == bloodtype) &&
        (organTypeFilter == 'all' ? true : organTypeFilter == organtype)
        



    })
    
    




    /* dev
    console.log("bloodfilter: "+ bloodTypeFilter + "\norganfilter: " + organTypeFilter+"\n cityfilter: " + cityFilter  )
    console.log(   (bloodFilter? "kan " : 'kapali' ) +(organFilter? "organ" :" kapali ") + (boneFilter ? "kemik" : "kapali"))
    console.log(filteredPosts)
    */

  }





  return (
    <>




      {loading ? true : filterHandler()}



      <div id="list-wrapper" className="w-full p-2 xl:p-8 lg:m h-auto " >

        <div id="page-title" className="w-full pb-4 text-3xl t-pr text-gray-900 text-center font-bold ">Donor Listesi</div>

        <div id='filter' className="t-pr w-full h-auto  rounded-xl  border-gray-400 mb-4 flex flex-row items center justify-center md:text-lg text-sm">
          <div class="form-check form-switch">

          </div>

          <button onClick={() => { setBloodFilter(!bloodFilter) }} className={'cursor-pointer w-auto px-8 py-4 md:py-2 md:px-12 mr-1 rounded-full transition duration-100  hover:transition hover:duration-200 flex justify-center items-center ' + (bloodFilter ? ' bg-green-900 bg-opacity-100' : 'bg-red-900  bg-opacity-80')}>{bloodFilter ? (<i className='fas fa-check fa-lg text-white mr-4'></i>) : <i className='fas fa-times fa-lg text-white mr-4'></i>}<span className="text-gray-100 font-bold">Kan</span></button>
          <button onClick={() => { setOrganFilter(!organFilter) }} className={'cursor-pointer w-auto px-8 py-4 md:py-2 md:px-12 mr-1 rounded-full transition duration-100  hover:transition hover:duration-200 flex justify-center items-center ' + (organFilter ? ' bg-green-900 bg-opacity-100' : 'bg-red-900  bg-opacity-80')}>{organFilter ? (<i className='fas fa-check fa-lg text-white mr-4'></i>) : <i className='fas fa-times fa-lg text-white mr-4'></i>}<span className="text-gray-100 font-bold">Organ</span></button>
          <button onClick={() => { setBoneFilter(!boneFilter) }} className={'cursor-pointer w-auto px-8 py-4 md:py-2 md:px-12 mr-1 rounded-full transition duration-100  hover:transition hover:duration-200 flex justify-center items-center ' + (boneFilter ? ' bg-green-900 bg-opacity-100' : 'bg-red-900  bg-opacity-80')}>{boneFilter ? (<i className='fas fa-check fa-lg text-white mr-4'></i>) : <i className='fas fa-times fa-lg text-white mr-4'></i>}<span className="text-gray-100 font-bold">Kemik Iligi</span></button>
          <button onClick={() => { setBloodFilter(false); setOrganFilter(false); setBoneFilter(false) }} className={'cursor-pointer w-auto px-8 py-4 md:py-2 md:px-12 mr-1 rounded-full transition duration-100  hover:transition hover:duration-200 flex justify-center items-center ' + (!bloodFilter && !boneFilter && !organFilter ? ' bg-green-900 bg-opacity-100' : 'bg-red-900  bg-opacity-80')}>{!bloodFilter && !boneFilter && !organFilter ? (<i className='fas fa-check fa-lg text-white mr-4'></i>) : <i className='fas fa-times fa-lg text-white mr-4'></i>}<span className="text-gray-100 font-bold">Tumugu Goster</span></button>

        </div>




        <div id='filter-2' className="w-full h-auto  rounded-xl  border-gray-400 mb-4 flex md:flex-row flex-col items-center justify-center md:text-lg text-sm ">




          <div className="flex flex-row md:m-0 mb-4 ">



            <div id="filter1" className="flex flex-col items-center justify-center md:flex-row">
              <span className="text-lg font-bold mr-2">Sehir:</span>
              <select onChange={(event) => { setCityFilter(event.target.value) }} className=' mr-8 w-48 text-center font-bold text-gray-800 px-8 py-4 md:py-2 md:px-12 rounded-full bg-gray-100  hover:transition hover:duration-200 flex justify-center items-center'>

                <option value="all">Hepsi</option>
                <option value="??stanbul">??stanbul</option>
                <option value="Ankara">Ankara</option>
                <option value="??zmir">??zmir</option>
                <option value="Adana">Adana</option>
                <option value="Ad??yaman">Ad??yaman</option>
                <option value="Afyonkarahisar">Afyonkarahisar</option>
                <option value="A??r??">A??r??</option>
                <option value="Aksaray">Aksaray</option>
                <option value="Amasya">Amasya</option>
                <option value="Antalya">Antalya</option>
                <option value="Ardahan">Ardahan</option>
                <option value="Artvin">Artvin</option>
                <option value="Ayd??n">Ayd??n</option>
                <option value="Bal??kesir">Bal??kesir</option>
                <option value="Bart??n">Bart??n</option>
                <option value="Batman">Batman</option>
                <option value="Bayburt">Bayburt</option>
                <option value="Bilecik">Bilecik</option>
                <option value="Bing??l">Bing??l</option>
                <option value="Bitlis">Bitlis</option>
                <option value="Bolu">Bolu</option>
                <option value="Burdur">Burdur</option>
                <option value="Bursa">Bursa</option>
                <option value="??anakkale">??anakkale</option>
                <option value="??ank??r??">??ank??r??</option>
                <option value="??orum">??orum</option>
                <option value="Denizli">Denizli</option>
                <option value="Diyarbak??r">Diyarbak??r</option>
                <option value="D??zce">D??zce</option>
                <option value="Edirne">Edirne</option>
                <option value="Elaz????">Elaz????</option>
                <option value="Erzincan">Erzincan</option>
                <option value="Erzurum">Erzurum</option>
                <option value="Eski??ehir">Eski??ehir</option>
                <option value="Gaziantep">Gaziantep</option>
                <option value="Giresun">Giresun</option>
                <option value="G??m????hane">G??m????hane</option>
                <option value="Hakk??ri">Hakk??ri</option>
                <option value="Hatay">Hatay</option>
                <option value="I??d??r">I??d??r</option>
                <option value="Isparta">Isparta</option>
                <option value="Kahramanmara??">Kahramanmara??</option>
                <option value="Karab??k">Karab??k</option>
                <option value="Karaman">Karaman</option>
                <option value="Kars">Kars</option>
                <option value="Kastamonu">Kastamonu</option>
                <option value="Kayseri">Kayseri</option>
                <option value="K??r??kkale">K??r??kkale</option>
                <option value="K??rklareli">K??rklareli</option>
                <option value="K??r??ehir">K??r??ehir</option>
                <option value="Kilis">Kilis</option>
                <option value="Kocaeli">Kocaeli</option>
                <option value="Konya">Konya</option>
                <option value="K??tahya">K??tahya</option>
                <option value="Malatya">Malatya</option>
                <option value="Manisa">Manisa</option>
                <option value="Mardin">Mardin</option>
                <option value="Mersin">Mersin</option>
                <option value="Mu??la">Mu??la</option>
                <option value="Mu??">Mu??</option>
                <option value="Nev??ehir">Nev??ehir</option>
                <option value="Ni??de">Ni??de</option>
                <option value="Ordu">Ordu</option>
                <option value="Osmaniye">Osmaniye</option>
                <option value="Rize">Rize</option>
                <option value="Sakarya">Sakarya</option>
                <option value="Samsun">Samsun</option>
                <option value="Siirt">Siirt</option>
                <option value="Sinop">Sinop</option>
                <option value="Sivas">Sivas</option>
                <option value="????rnak">????rnak</option>
                <option value="Tekirda??">Tekirda??</option>
                <option value="Tokat">Tokat</option>
                <option value="Trabzon">Trabzon</option>
                <option value="Tunceli">Tunceli</option>
                <option value="??anl??urfa">??anl??urfa</option>
                <option value="U??ak">U??ak</option>
                <option value="Van">Van</option>
                <option value="Yalova">Yalova</option>
                <option value="Yozgat">Yozgat</option>
                <option value="Zonguldak">Zonguldak</option>
              </select>
            </div>






            <div id="filter2" className="flex flex-col items-center justify-center md:flex-row">
              <span className="text-lg font-bold mr-2">Kan Grubu:</span>
              <select onChange={(event) => { setBloodTypeFilter(event.target.value) }} className=' md:mr-8 w-48 text-center font-bold text-gray-800 px-8 py-4 md:py-2 md:px-12  rounded-full bg-gray-100  hover:transition hover:duration-200 flex justify-center items-center'>

                <option value="all">Hepsi</option>
                <option value="A+">A+</option><option value="A-">A-</option>
                <option value="B+">B+</option><option value="B-">B-</option>
                <option value="O+">O+</option><option value="O-">O-</option>
                <option value="AB+">AB+</option><option value="AB-">AB-</option>
              </select>
            </div>

          </div>



          <div id="filter3" className={" flex-col items-center justify-center md:flex-row " + (organFilter || (!organFilter && !bloodFilter && !boneFilter) ? "flex" : "hidden")}>
            <span className="text-lg font-bold mr-2 ">Organ:</span>
            <select onChange={(event) => { setOrganTypeFilter(event.target.value) }} className='w-48 text-center font-bold text-gray-800 px-8 py-4 md:py-2 md:px-12 md:mr-1 rounded-full bg-gray-100  hover:transition hover:duration-200  justify-center items-center flex'>

              <option value="all">Hepsi</option>
              <option value="Kalp">Kalp</option>
              <option value="Akci??er">Akci??er</option>
              <option value="K??k??rdak">K??k??rdak</option>
              <option value="Karaci??er">Karaci??er</option>
              <option value="Kornea">Kornea</option>
              <option value="Tendon">Tendon</option>
              <option value="??st Solunum Yolu">??st Solunum Yolu</option>
              <option value="B??brek">B??brek</option>
              <option value="Kemik">Kemik</option>
              <option value="??nce Ba????rsak">??nce Ba????rsak</option>
              <option value="??st Sindirim Yolu">??st Sindirim Yolu</option>
              <option value="Pankreas">Pankreas</option>
              <option value="Kas Dokusu">Kas Dokusu</option>
              <option value="Y??z ve Sa??l?? Deri">Y??z ve Sa??l?? Deri</option>
              <option value="Ekstremite Sa?? Bacak">Ekstremite Sa?? Bacak</option>
              <option value="Ekstremite Sa?? Kol">Ekstremite Sa?? Kol</option>
            </select>
          </div>
        </div>
























        {filteredPosts.length == 0 && <EmptyList />}

        {loading ? <ListWaitingLoader /> : (


          filteredPosts.slice((listPage*10)-10, listPage * 10).map(post => (

            <ListItem key={post._id} type={post.type} id={post._id} title={post.title} city={post.city} desc={post.desc.length > 144 ? post.desc.substring(0, 144) + " ..." : post.desc.substring(0, 144)} date={new Date(post.createdAt).toLocaleDateString(
              'tr-TR',
              {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              }
            )} />

          ))
        )}

              
        <div className="w-full h-auto text-center flex flex-row justify-center items-center">
          <div className="flex items-center">
          {listPage != 1 ? <div onClick={()=>setListPage(listPage-1)}className="cursor-pointer hover:underline text-red-900 font-bold text-md mr-8"> {'< '}??nceki Sayfa</div> : <div className=""></div> }
          <div className="text-lg text-red-900 font-bold ">Sayfa :  {listPage}</div>
          {listPage != pageCount ? <div onClick={()=>setListPage(listPage+1)} className=" cursor-pointer hover:underline text-red-900 font-bold text-md ml-8 "> {'> '}Sonraki Sayfa</div>:<div className=""></div> }
          </div>

        </div>



        {/* <ListItem key={post._id} title={post.title} desc={post.desc} time={post.createdAt} />  */}










        {/*detay btn  <div className='cursor-pointer w-36 h-12 rounded-full bg-gray-600 flex justify-center items-center'><i className='fas fa-info fa-lg text-white mr-4'></i><span className="text-gray-100 font-bold">Detay</span></div>*/}



      </div>











    </>
  )
}

export default List
