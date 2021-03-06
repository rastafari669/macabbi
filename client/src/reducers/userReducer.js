import {
    USER_LIST_REQUEST,
    USER_LIST_SUCCESS,
    USER_LIST_FAIL,
    USER_CREATE_REQUEST,
    USER_CREATE_FAIL,
    USER_CREATE_SUCCESS,
    USER_RESET
} from '../constants/userConstants'

const initialState = {
    users:[],
    loading: false,
    error: null
}

export const usersListReducer = (state = initialState, action) =>{
  switch(action.type){
    case USER_LIST_REQUEST:
        return {...state, loading: true}
    case USER_LIST_SUCCESS:
        return {...state,loading: false, users: action.payload}
    case USER_LIST_FAIL:
        return {...state,loading:false,error: action.payload}
    default:
        return state;
  }
}


export const createUsertReducer = (state = { }, action) =>{
  switch(action.type){
    case USER_CREATE_REQUEST:
        return {loading: true}
    case USER_CREATE_SUCCESS:
        return {loading: false,success: true, userInfo: action.payload}
    case USER_CREATE_FAIL:
        return {loading:false,error: action.payload}

    case USER_RESET:
        return {}
    default:
        return state;
  }
}