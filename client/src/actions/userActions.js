import {
    USER_LIST_REQUEST,
    USER_CREATE_REQUEST,
    USER_RESET
} from '../constants/userConstants';



export const createUser = (username,email,age) =>({
    type: USER_CREATE_REQUEST,
    payload: {username,email,age}
})

export const listUsers = () =>({
    type: USER_LIST_REQUEST,
    
})

export const resetUser = () =>{
    return {
        type: USER_RESET
    }
    
}


///////////////////////REDUX-THUNK//////////////////////////

// export const listUsers = () => async (dispatch) => {
//   try {
//       dispatch({type: USER_LIST_REQUEST})

//       const {data} = await axios.get('http://localhost:4000/app/getusers')

//       dispatch({
//           type: USER_LIST_SUCCESS,
//           payload: data
//       })
//   } catch (error) {
//       dispatch({
//           type: USER_LIST_FAIL,
//           payload: error.response && error.response.data.message
//            ? error.response.data.message :
//           error.message
//       })
//   }
// }


// export const createUser = (username,email,age) => async (dispatch) => {
//   try {
//       dispatch({type: USER_CREATE_REQUEST})

//       const config = {
//           headers: {
//               'Content-Type': 'application/json'
//           }
//       }

//       const {data} = await axios.post('http://localhost:4000/app/signup',{username,email,age},config)

//       dispatch({
//           type: USER_CREATE_SUCCESS,
//           payload: data
//       })
//   } catch (error) {
//       dispatch({
//           type: USER_CREATE_FAIL,
//           payload: error.response && error.response.data.message
//            ? error.response.data.message :
//           error.message
//       })
//   }
// }

// export const resetUser = () => async (dispatch) => {
//  dispatch({type: USER_RESET})
// }