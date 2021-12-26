
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import addPostHandler from '../Handlers/addPostHandler'
import ListWaitingLoader from './ListWaitingLoader'
import AddPostFormLoader from './AddPostFormLoader'
import { useSelector } from 'react-redux'
import NeedRegister from './NeedRegister'

const WaitingListForm = () => {
  var loader = false
  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin
  const [kindState, setKindState] = useState('2')
  const [typeState, setTypeState] = useState('1')
  const [status, setStatus] = useState({ code: '', msg: '' })


  const [name, setName] = useState(userInfo.name ? userInfo.name : "empty")
  const [mobile, setMobile] = useState(userInfo.mobile ? userInfo.mobile : "empty")
  const [city, setCity] = useState(userInfo.city ? userInfo.city : "all")
  const [organType, setOrganType] = useState('all')
  const [title, setTitle] = useState('')
  const [bloodType, setBloodType] = useState(userInfo.bloodType ? userInfo.bloodType : "all")
  const [desc, setDesc] = useState('Yayınlanmasını istediğiniz açıklamayı yazın.')

  const submitHandler = async (event) => {
    event.preventDefault()


    loader = true
    const publisher = userInfo._id
    var type = typeState
    var kind = kindState
    var organ = organType
    var blood = bloodType
    var params = { publisher, name, mobile, city, kind, type, organ, title, blood, desc }
    try {
      const response = await axios.post(`/api/post/add`, params)
      const { data, status } = response
      const { id, info } = data

      setStatus({ code: status, msg: info, id: id })
      console.log(status)

    } catch (error) {
      console.log(error.response)
      setStatus({ code: error.response.status, msg: error.response.data })
      console.log(status)

    }



  }


  return (


    <div id="WaitingListForm" className='lg:py-8 lg:px-16 p-4  w-full h-full flex flex-col '>

      {userInfo && userInfo._id == 'visitor' ? <NeedRegister /> :
        (
          <>
      <div id="alert" className='w-full h-auto flex justify-center items-center lg:text-lg text-md mb-4 '>
        <span>HealthCareApp'den yararlanabilmek için bilgilerinizi lütfen eksiksiz doldurunuz. Site üzerinden yapılacak bütün işlemlerde bu bilgileriniz kullanılacak ve verdiğiniz ilgiler üzerinden sizinle irtibat sağlanacaktır.</span>
      </div>

      <div id="select" className=" flex flex-row justify-center  w-full h-auto border-b-2 border-gray-500 pb-4 border-opacity-50 ">
        <button onClick={() => setKindState('1')} className={'cursor-pointer w-1/2 h-auto mr-4 py-5 xl:w-96  rounded transition duration-300   hover:transition hover:duration-200 flex justify-center items-center ' + (kindState == '1' ? "bg-green-900" : "bg-gray-500 hover:bg-green-900")}><span className="text-gray-100 font-bold">Donor Olmak Istiyorum</span></button>
        <button onClick={() => setKindState('2')} className={'cursor-pointer w-1/2 h-auto mr-4 py-5 xl:w-96  rounded transition duration-300   hover:transition hover:duration-200 flex justify-center items-center ' + (kindState == '2' ? "bg-green-900" : "bg-gray-500 hover:bg-green-900")}><span className="text-gray-100 font-bold text-center">Bekleme Listesine Hasta Eklemek Istiyorum</span></button>
      </div>

      <div className=" w-full h-36 mt-4 flex flex-row items-center justify-center">
        <button onClick={() => setTypeState('1')} className={'w-48 py-4  text-gray-100  font-bold rounded-xl shadow-md mr-4 ' + (typeState == '1' ? 'bg-gray-800 opacity-100' : 'bg-gray-700 opacity-70 hover:opacity-80 hover:shadow-lg')}>{typeState == '1' ? (<i className='fas fa-check fa-lg text-white mr-4'></i>) : <i className='fas fa-times fa-lg text-white mr-4'></i>}Kan İhtiyacı</button>
        <button onClick={() => setTypeState('2')} className={'w-48 py-4  text-gray-100  font-bold rounded-xl shadow-md mr-4 ' + (typeState == '2' ? 'bg-gray-800 opacity-100' : 'bg-gray-700 opacity-70 hover:opacity-80 hover:shadow-sm')}>{typeState == '2' ? (<i className='fas fa-check fa-lg text-white mr-4'></i>) : <i className='fas fa-times fa-lg text-white mr-4'></i>}Organ Bağışı</button>
        <button onClick={() => setTypeState('3')} className={'w-48 py-4  text-gray-100  font-bold rounded-xl shadow-md mr-4 ' + (typeState == '3' ? 'bg-gray-800 opacity-100' : 'bg-gray-700 opacity-70')}>{typeState == '3' ? (<i className='fas fa-check fa-lg text-white mr-4'></i>) : <i className='fas fa-times fa-lg text-white mr-4'></i>}Kemik İliği</button>
      </div>

      <div id="form" className=' w-full h-auto flex flex-col justify-start items-center  pt-4 text-gray-900 pb-12' >
        <form className="w-full" action="">

          <div className="w-full pb-2  flex flex-col items-center" >


            <div class={"transition animate-pulse duration-1000 my-2  rounded relative" + ((status && status.code == 200) ? " block bg-green-200 border border-green-400 text-green-700 px-48 py-3" : ((status && status.code == 400) ? " block bg-red-100 border border-red-400 text-red-700 px-48 py-3 " : "hidden"))} role="alert">
              <strong class="font-bold">{status.msg ? status.msg : ""}</strong>


            </div>






          </div>
          <div className="flex flex-col md:flex-row justify-center items-center justify-items-center h-auto w-full mb-4" >
            <span className='flex items-center justify-center mr-4 w-36 md:mb-0 mb-2 font-bold '>Ad-Soyad</span>
            <input type="text" onChange={(e) => setName(e.target.value)} value={name} name="" id="" className='w-96 capitalize h-12 border-2 bg-gray-100 border-opacity-50  border-gray-400 text-center rounded-lg' />
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center justify-items-center h-auto w-full mb-4" >
            <span className='flex items-center justify-center mr-4 w-36 md:mb-0 mb-2 font-bold '>Telefon Numarasi</span>
            <input type="text" onChange={(e) => setMobile(e.target.value)} value={mobile} name="" id="" className='w-96 h-12 border-2 bg-gray-100 border-opacity-50 border-gray-400 text-center rounded-lg' />
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center justify-items-center h-auto w-full mb-4" >
            <span className='flex items-center justify-center mr-4 w-36 md:mb-0 mb-2 font-bold '>Şehir</span>
            <select className=' w-96 h-12 border-2 border-opacity-50  bg-gray-100 border-gray-400 text-center rounded-lg flex justify-center items-center' onChange={(e) => setCity(e.target.value)} value={city}>

              <option value="all">Türkiye Geneli</option>
              <option value="İstanbul">İstanbul</option>
              <option value="Ankara">Ankara</option>
              <option value="İzmir">İzmir</option>
              <option value="Adana">Adana</option>
              <option value="Adıyaman">Adıyaman</option>
              <option value="Afyonkarahisar">Afyonkarahisar</option>
              <option value="Ağrı">Ağrı</option>
              <option value="Aksaray">Aksaray</option>
              <option value="Amasya">Amasya</option>
              <option value="Antalya">Antalya</option>
              <option value="Ardahan">Ardahan</option>
              <option value="Artvin">Artvin</option>
              <option value="Aydın">Aydın</option>
              <option value="Balıkesir">Balıkesir</option>
              <option value="Bartın">Bartın</option>
              <option value="Batman">Batman</option>
              <option value="Bayburt">Bayburt</option>
              <option value="Bilecik">Bilecik</option>
              <option value="Bingöl">Bingöl</option>
              <option value="Bitlis">Bitlis</option>
              <option value="Bolu">Bolu</option>
              <option value="Burdur">Burdur</option>
              <option value="Bursa">Bursa</option>
              <option value="Çanakkale">Çanakkale</option>
              <option value="Çankırı">Çankırı</option>
              <option value="Çorum">Çorum</option>
              <option value="Denizli">Denizli</option>
              <option value="Diyarbakır">Diyarbakır</option>
              <option value="Düzce">Düzce</option>
              <option value="Edirne">Edirne</option>
              <option value="Elazığ">Elazığ</option>
              <option value="Erzincan">Erzincan</option>
              <option value="Erzurum">Erzurum</option>
              <option value="Eskişehir">Eskişehir</option>
              <option value="Gaziantep">Gaziantep</option>
              <option value="Giresun">Giresun</option>
              <option value="Gümüşhane">Gümüşhane</option>
              <option value="Hakkâri">Hakkâri</option>
              <option value="Hatay">Hatay</option>
              <option value="Iğdır">Iğdır</option>
              <option value="Isparta">Isparta</option>
              <option value="Kahramanmaraş">Kahramanmaraş</option>
              <option value="Karabük">Karabük</option>
              <option value="Karaman">Karaman</option>
              <option value="Kars">Kars</option>
              <option value="Kastamonu">Kastamonu</option>
              <option value="Kayseri">Kayseri</option>
              <option value="Kırıkkale">Kırıkkale</option>
              <option value="Kırklareli">Kırklareli</option>
              <option value="Kırşehir">Kırşehir</option>
              <option value="Kilis">Kilis</option>
              <option value="Kocaeli">Kocaeli</option>
              <option value="Konya">Konya</option>
              <option value="Kütahya">Kütahya</option>
              <option value="Malatya">Malatya</option>
              <option value="Manisa">Manisa</option>
              <option value="Mardin">Mardin</option>
              <option value="Mersin">Mersin</option>
              <option value="Muğla">Muğla</option>
              <option value="Muş">Muş</option>
              <option value="Nevşehir">Nevşehir</option>
              <option value="Niğde">Niğde</option>
              <option value="Ordu">Ordu</option>
              <option value="Osmaniye">Osmaniye</option>
              <option value="Rize">Rize</option>
              <option value="Sakarya">Sakarya</option>
              <option value="Samsun">Samsun</option>
              <option value="Siirt">Siirt</option>
              <option value="Sinop">Sinop</option>
              <option value="Sivas">Sivas</option>
              <option value="Şırnak">Şırnak</option>
              <option value="Tekirdağ">Tekirdağ</option>
              <option value="Tokat">Tokat</option>
              <option value="Trabzon">Trabzon</option>
              <option value="Tunceli">Tunceli</option>
              <option value="Şanlıurfa">Şanlıurfa</option>
              <option value="Uşak">Uşak</option>
              <option value="Van">Van</option>
              <option value="Yalova">Yalova</option>
              <option value="Yozgat">Yozgat</option>
              <option value="Zonguldak">Zonguldak</option>
            </select>



          </div>

          <div id="selection-area" className="flex flex-col items-center justify-center ">
            <div className="flex flex-col md:flex-row justify-center items-center justify-items-center h-auto w-full mb-4" >
              <span className='flex items-center justify-center mr-4 w-36 md:mb-0 mb-2 font-bold '>Organ</span>
              <select onChange={(e) => setOrganType(e.target.value)} value={organType} className='w-96 h-12 border-2 border-opacity-50  bg-gray-100 border-gray-400 text-center rounded-lg flex justify-center items-center'>

                <option value="Kalp">Kalp</option>
                <option value="Akciğer">Akciğer</option>
                <option value="Kıkırdak">Kıkırdak</option>
                <option value="Karaciğer">Karaciğer</option>
                <option value="Kornea">Kornea</option>
                <option value="Tendon">Tendon</option>
                <option value="Üst Solunum Yolu">Üst Solunum Yolu</option>
                <option value="Böbrek">Böbrek</option>
                <option value="Kemik">Kemik</option>
                <option value="İnce Bağırsak">İnce Bağırsak</option>
                <option value="Üst Sindirim Yolu">Üst Sindirim Yolu</option>
                <option value="Pankreas">Pankreas</option>
                <option value="Kas Dokusu">Kas Dokusu</option>
                <option value="Yüz ve Saçlı Deri">Yüz ve Saçlı Deri</option>
                <option value="Ekstremite Sağ Bacak">Ekstremite Sağ Bacak</option>
                <option value="Ekstremite Sağ Kol">Ekstremite Sağ Kol</option>
              </select>
            </div>



            <div className="flex flex-col md:flex-row justify-center items-center justify-items-center h-auto w-full mb-4" >
              <span className='flex items-center justify-center mr-4 w-36 md:mb-0 mb-2 font-bold '>Kan Grubu</span>
              <select className='w-96 h-12 border-2 border-opacity-50  bg-gray-100 border-gray-400 text-center rounded-lg flex justify-center items-center' onChange={(e) => setBloodType(e.target.value)} value={bloodType}>

                <option value="A+">A+</option><option value="A-">A-</option>
                <option value="B+">B+</option><option value="B-">B-</option>
                <option value="O+">O+</option><option value="O-">O-</option>
                <option value="AB+">AB+</option><option value="AB-">AB-</option>
              </select>
            </div>
          </div>


          <div className="flex flex-col md:flex-row justify-center items-center justify-items-center h-auto w-full mb-4" >
            <span className='flex items-center justify-center mr-4 w-36 md:mb-0 mb-2 font-bold '> Gönderi Başlığı</span>
            <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} name="" id="" className='w-96 capitalize h-12 border-2 bg-gray-100 border-opacity-50  border-gray-400 text-center rounded-lg' />
          </div>


          <div className="flex flex-col md:flex-row justify-center items-center justify-items-center h-auto w-full mb-4" >
            <span className='flex items-center justify-center mr-4 w-36 md:mb-0 mb-2 font-bold '>Acıklama</span>
            <textarea onChange={(e) => setDesc(e.target.value)} value={desc} id="w3review" className="bg-gray-100 p-2" name="w3review" rows="8" cols="50">

            </textarea>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center justify-items-center h-auto w-full mb-4" >
            <span className='flex items-center justify-center mr-4 w-auto md:mb-0 mb-2 font-bold '>Raporlar/Belgeler</span>
            <div class="flex justify-center">
              <div class="mb-3 w-96">

                <input class="form-control
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700

    border border-solid border-gray-600
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" id="formFileMultiple" multiple />
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center justify-items-center h-auto w-full mb-4" >
            {
              loader ? <AddPostFormLoader /> :
                (userInfo == 'visitor' ?

                  <button disabled onClick={submitHandler} className={" btn cursor-pointer disabled rounded-md bg-green-800 px-12 py-4 text-gray-100" + ((status && status.code == 200) ? " hidden" : " flex")}>Islemi tamamlayabilmek icin uye girisi yapmaniz gerekiyor</button>
                  :

                  <button onClick={submitHandler} className={" btn cursor-pointer rounded-md bg-green-800 px-12 py-4 text-gray-100" + ((status && status.code == 200) ? " hidden" : " flex")}>Islemi Tamamla</button>
                )

            }






          </div>




        </form>


        
      </div>
      </>
        )}
    </div>
  )
}

export default WaitingListForm
