
import { MENU_CHANGE, MESSAGES_CHANGE, CHATWITH_SET, POST_SET, POST_FAIL, PROFILE_SET, POST_REQUEST, POST_SUCCESS, PROFILE_FAIL, PROFILE_REQUEST, PROFILE_SUCCESS,ADD_MESSAGE_REQUEST,ADD_MESSAGE_SUCCESS,ADD_MESSAGE_FAIL } from "../Constants/onPageConstants"

import axios from 'axios'

export const setMenuPage = (id) => async (dispatch) =>{
    try {
        
        dispatch({
            type:MENU_CHANGE,
            payload:id
        })
        
    } catch (error) {
        console.log('error on redux stage')
    }
}


export const setMessagePage = (id) => async (dispatch) =>{
    try {
        
        dispatch({
            type:MESSAGES_CHANGE,
            payload:id
        })
        
    } catch (error) {
        console.log('error on redux stage')
    }
}

export const chatWith = (id) => async (dispatch) =>{
    try {
        
        dispatch({
            type:CHATWITH_SET,
            payload:id
        })
        
    } catch (error) {
        console.log('error on redux stage')
    }
}
export const setPostId = (id) => async (dispatch) =>{
    try {
        
        dispatch({
            type:POST_SET,
            payload:id
        })
        
    } catch (error) {
        console.log('error on redux stage')
    }
}

export const getSinglePost = (id) => async (dispatch) =>{
    try {
        dispatch({
            type: POST_REQUEST
        })

        const config = {
            headers:{
                'Content-Type':'application/json'
            },
        }

        

        const {data}= await axios.get(`/api/post/${id}`)

        dispatch({
            type:POST_SUCCESS,
            payload:data
        })

        
        
    } catch (error) {
        dispatch({
            type: POST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}


export const getProfile = (id) => async (dispatch) =>{
    try {
        dispatch({
            type: PROFILE_REQUEST
        })

        const config = {
            headers:{
                'Content-Type':'application/json'
            },
        }

        

        const {data}= await axios.get(`/api/user/profile/${id}`,config)

        dispatch({
            type:PROFILE_SUCCESS,
            payload:data
        })

        
        
    } catch (error) {
        dispatch({
            type: PROFILE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const setProfileRequest = (id) => async (dispatch) =>{
    try {
        
        dispatch({
            type:PROFILE_SET,
            payload:id
        })
        
    } catch (error) {
        console.log('error on redux stage')
    }
}

export const createMessage = (message) => async (dispatch) =>{
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
            type:CHATWITH_SET,
            payload:data
        })

        
        
    } catch (error) {
        dispatch({
            type: ADD_MESSAGE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}


