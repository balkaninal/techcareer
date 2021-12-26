import { MENU_CHANGE, MESSAGES_CHANGE, CHATWITH_SET, POST_SET, POST_FAIL, PROFILE_SET, POST_REQUEST, POST_SUCCESS, PROFILE_FAIL, PROFILE_REQUEST, PROFILE_SUCCESS,ADD_MESSAGE_REQUEST,ADD_MESSAGE_SUCCESS,ADD_MESSAGE_FAIL } from "../Constants/onPageConstants"
export const onPageReducer = (state = { onMenu: "1", onMessages: '1', chat: '0', post: '0' }, action) => {

    switch (action.type) {


        case MENU_CHANGE:
            return { ...state, onMenu: action.payload }
        case MESSAGES_CHANGE:
            return { ...state, onMessages: action.payload }
        case CHATWITH_SET:
            return { ...state, chat: action.payload }
        case POST_SET:
            return { ...state, postRequest: action.payload }
        case POST_REQUEST:
            return { ...state, viewPost: { loading: true } }
        case POST_SUCCESS:
            return { ...state, viewPost: { loading: false, post: action.payload } }
        case POST_FAIL:
            return { ...state, viewPost: { loading: false, error: action.payload } }
        case PROFILE_SET:
            return { ...state, profileRequest: action.payload }
        case PROFILE_REQUEST:
            return { ...state, profile: { loading: true } }
        case PROFILE_SUCCESS:
            return { ...state, profile: { loading: false, profileData: action.payload } }
        case PROFILE_FAIL:
            return { ...state, profile: { loading: false, error: action.payload } }
        case ADD_MESSAGE_REQUEST:
            return { ...state, addMessage: { loading: true } }
        case ADD_MESSAGE_SUCCESS:
            return { ...state, chat: action.payload }
        case ADD_MESSAGE_FAIL:
            return { ...state, addMessage: { loading: false, error: action.payload } }
        default:
            return state

    }
}