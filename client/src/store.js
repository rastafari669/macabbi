import {createStore,combineReducers,applyMiddleware} from 'redux';
//import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {usersListReducer,createUsertReducer} from './reducers/userReducer';
import createSagaMiddleWare from 'redux-saga';
import rootSaga from '../src/sagas/rootSaga';

const sagaMiddleware = createSagaMiddleWare()

const reducer = combineReducers({
    userList: usersListReducer,
    createUser: createUsertReducer
    
})
const initialState = {}
// const middleware = [thunk]
const store = createStore(reducer,initialState, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga);

export default store;
