import axios from 'axios'
import { LIST_REQUEST,LIST_SUCCESS,LIST_FAIL} from "../Constants/listConstants.js"


export const getPostList = () => async (dispatch) =>{
    try {
        dispatch({
            type: LIST_REQUEST
        })
        const config = {
            headers:{
                'Content-Type':'application/json'
            },
        }

        const {data}= await axios.get('/api/post/',config)

        dispatch({
            type:LIST_SUCCESS,
            payload:data
        })

        
        
    } catch (error) {
        dispatch({
            type: LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

