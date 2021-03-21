import { takeEvery, put} from "@redux-saga/core/effects";
import {USER_RESET,USER_CREATE_REQUEST} from '../constants/userConstants'


function* resetUser(){
  
        
        yield put({type: USER_RESET})
        
    
}

function* resetUserSaga(){
   yield takeEvery(USER_CREATE_REQUEST,resetUser)
}


export default resetUserSaga;