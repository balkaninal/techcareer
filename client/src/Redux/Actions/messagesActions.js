import axios from 'axios'
import { MESSAGES_REQUEST,MESSAGES_SUCCESS,MESSAGES_FAIL} from "../Constants/messagesConstants"


export const getMessages = (userId) => async (dispatch) =>{
    try {
        dispatch({
            type: MESSAGES_REQUEST
        })
        const config = {
            headers:{
                'Content-Type':'application/json'
            },
        }

        const {data}= await axios.get(`/api/messageroom/user/${userId}`,config)

        dispatch({
            type:MESSAGES_SUCCESS,
            payload:data
        })

        
        
    } catch (error) {
        dispatch({
            type: MESSAGES_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

