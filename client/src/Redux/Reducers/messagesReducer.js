import { MESSAGES_REQUEST,MESSAGES_SUCCESS,MESSAGES_FAIL} from "../Constants/messagesConstants"
export const messagesReducer = (state={messages:[]},action) => {
    
    switch (action.type){

        case MESSAGES_REQUEST:
            return {loading:true}
        case MESSAGES_SUCCESS:
            return {loading:false,messages:action.payload}
        case MESSAGES_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state

    }
}