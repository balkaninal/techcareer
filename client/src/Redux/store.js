import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {userLoginReducer} from './Reducers/userReducers'
import{onPageReducer} from './Reducers/onPageReducer'
import { listReducer } from './Reducers/listReducer'
import { messagesReducer } from './Reducers/messagesReducer'
import {addMessageReducer} from './Reducers/chatReducers'
const reducer = combineReducers(
    {
       userLogin:userLoginReducer,
       onPage:onPageReducer,
       postList:listReducer,
       messages:messagesReducer,
       addMessage:addMessageReducer
       
    }
)
/* const cartItemsFromStorage=localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const initialState = {
    cart:{ cartItems:cartItemsFromStorage},
    userLogin:{userInfo:userInfoFromStorage}
}
*/


const userInfoFromStorage=localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : {_id:'visitor'}

const initialState = {
    userLogin:{userInfo:userInfoFromStorage},
    onPage:{onMenu:'1',onMessages:'1',chat:'0',viewPost:{loading:false,post:'0'},profile:{loading:false,profileData:{posts:[]}}},
    messages:{loading:false,messages:[]},
    addMessage:{loading:false}
    

}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store