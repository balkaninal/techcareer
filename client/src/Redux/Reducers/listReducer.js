import { LIST_REQUEST,LIST_SUCCESS,LIST_FAIL} from "../Constants/listConstants.js"
export const listReducer = (state={posts:[]},action) => {
    
    switch (action.type){

        case LIST_REQUEST:
            return {loading:true}
        case LIST_SUCCESS:
            return {loading:false,posts:action.payload}
        case LIST_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state

    }
}