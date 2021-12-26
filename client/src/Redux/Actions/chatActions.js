import axios from 'axios'
import { ADD_MESSAGE_FAIL,ADD_MESSAGE_SUCCESS,ADD_MESSAGE_REQUEST } from "../Constants/chatConstants"


export const addMessage = (message) => async (dispatch) =>{
    try {
        dispatch({
            type: ADD_MESSAGE_REQUEST
        })

        const config = {
            headers:{
                'Content-Type':'application/json'
            },
        }

        

        const {data}= await axios.post('/api/messageroom/add',message,config)

        dispatch({
            type:ADD_MESSAGE_SUCCESS,
            payload:data
        })

        
        
    } catch (error) {
        dispatch({
            type: ADD_MESSAGE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}