import { takeEvery,call, put} from "@redux-saga/core/effects";
import {USER_LIST_REQUEST,USER_LIST_SUCCESS,USER_LIST_FAIL} from '../constants/userConstants'
import axios from 'axios';

const apiUrl = 'http://localhost:4000/app/getusers';


const getApi = async () => {
 return await axios.get(apiUrl).catch((error) => {throw error})
}


function* fetchUsers(){
    try {
        
        const {data} = yield call(getApi);
        
        
        yield put({type: USER_LIST_SUCCESS, payload: data})
        
    } catch (error) {
        yield put({type: USER_LIST_FAIL, payload: error.message})
    }
}

function* userSaga(){
   yield takeEvery(USER_LIST_REQUEST,fetchUsers)
}


export default userSaga;