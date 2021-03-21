import { takeEvery,call, put} from "@redux-saga/core/effects";
import {USER_CREATE_FAIL,USER_CREATE_REQUEST,USER_CREATE_SUCCESS} from '../constants/userConstants'
import axios from 'axios';

const apiUrl = 'http://localhost:4000/app/signup';


const postApi = async (user) => {
    

    const config = {
          headers: {
              'Content-Type': 'application/json'
          }
      }
 return await axios.post(apiUrl,user,config).catch((error) => {throw error})
}


function* createUser(action){
    try {
        
        const {data} = yield call(postApi,action.payload);
        
       
       
        yield put({type: USER_CREATE_SUCCESS, payload: data})
        
    } catch (error) {
        yield put({
            type: USER_CREATE_FAIL,
             payload: error.response && error.response.data.message
             ? error.response.data.message :
             error.message
            })
    }
}

function* createUserSaga(){
   yield takeEvery(USER_CREATE_REQUEST,createUser)
}


export default createUserSaga;