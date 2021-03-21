import {all} from 'redux-saga/effects';
import usersSaga from './loadUserSaga';
import createUserSaga from './createUserSaga';



export default function* rootSaga(){
    yield all([
        usersSaga(),
        createUserSaga(),
        
    ])
}