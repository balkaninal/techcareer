import axios from "axios";

const getPostList = () => async (params) =>{

    const config = {
        headers:{
            'Content-Type':'application/json'
        },
    }
    
    const result=await axios.post('/api/post/add',params,config)
}

export default getPostList