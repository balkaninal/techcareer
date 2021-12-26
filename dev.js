var name,falan,filan;


const user ={
    "name": "balkaninal",
       "password" : "123456",
       "dateOfBirth": "1998-02-26T00:00:00.000Z",
       "mobile": "5331301000",
       "homeMobile": "3646116441",
       "email": "inalbalkan@gmail.com",
       "isAdmin": "false",
       "isDonor": "false",
       "donorFor": [],
       "waitingFor": []
}



const post = {
    "title":"Post Baslik 1",
    "desc":"When I want to send one object I can easily get the the request content by req.body.id and req.body.Name, so how to do it with multiple objects inside the request body?",
    "postType":"1",
    "city":"Ankara",
    "documents":[]
}


/*

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

*/


const posts = [{
    name:"post1",
    title:"post1 title"
},
{
    name:"post2",
    title:"post2 tutle"
}]

const str = 'asdsad'

console.log(str.substring(0,55))








const state={
   
    messages: {
      loading: false,
      messages: [
        {
          _id: '61c802d564d71c3e0722203d',
          users: [
            {
              id: '61c58f3d54303f2e2eb5fb04',
              name: 'balkaninal'
            },
            {
              id: '61c59ca4f7adf4025f7cd7db',
              name: 'meldatsn'
            }
          ],
          messages: [
            {
              sender: '61c58f3d54303f2e2eb5fb04',
              receiver: '61c59ca4f7adf4025f7cd7db',
              message: 'selaaams'
            },
            {
              sender: '61c59ca4f7adf4025f7cd7db',
              receiver: '61c58f3d54303f2e2eb5fb04',
              message: 'selaaams naaber'
            },
            {
              sender: '61c59ca4f7adf4025f7cd7db',
              receiver: '61c58f3d54303f2e2eb5fb04',
              message: 'selaaams naaber'
            }
          ],
          createdAt: '2021-12-26T05:51:17.230Z',
          updatedAt: '2021-12-26T05:51:43.792Z',
          __v: 2
        },
        {
          _id: '61c8054a5c995d92df52b136',
          users: [
            {
              id: '61c58f3d54303f2e2eb5fb04',
              name: 'balkaninal'
            },
            {
              id: '61c59cb0f7adf4025f7cd7de',
              name: 'yasomaso'
            }
          ],
          messages: [
            {
              sender: '61c58f3d54303f2e2eb5fb04',
              receiver: '61c59cb0f7adf4025f7cd7de',
              message: 'selaaams naaber yaso mesaj deneme'
            },
            {
              sender: '61c59cb0f7adf4025f7cd7de',
              receiver: '61c58f3d54303f2e2eb5fb04',
              message: 'iyi senden naber balkan mesaj deneme'
            }
          ],
          createdAt: '2021-12-26T06:01:46.816Z',
          updatedAt: '2021-12-26T06:02:05.748Z',
          __v: 1
        }
      ]
    }
  }



  const post={
    "_id": "61c6480509d4edd570142dc7",
    "title": "",
    "publisher": "61c58f3d54303f2e2eb5fb04",
    "mobile": "5331301000",
    "desc": "Yayınlanmasını istediğiniz açıklamayı yazın.",
    "kind": "1",
    "type": "1",
    "organ": "all",
    "city": "all",
    "documents": [],
    "createdAt": "2021-12-24T22:21:57.774Z",
    "updatedAt": "2021-12-24T22:21:57.774Z",
    "__v": 0
  }