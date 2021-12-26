import { ADD_MESSAGE_FAIL,ADD_MESSAGE_SUCCESS,ADD_MESSAGE_REQUEST } from "../Constants/chatConstants"
export const addMessageReducer = (state={},action) => {
    
    switch (action.type){

        case ADD_MESSAGE_REQUEST:
            return {loading:true}
        case ADD_MESSAGE_SUCCESS:
            return {loading:false,messageAdd:action.payload}
        case ADD_MESSAGE_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state

    }
}