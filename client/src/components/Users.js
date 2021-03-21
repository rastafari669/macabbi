import React,{useEffect} from 'react';
import {Table } from 'react-bootstrap';
import {useDispatch,useSelector} from 'react-redux';
import {listUsers,resetUser} from '../actions/userActions';
import Message from '../components/Message';
import Loader from '../components/Loader';


const Users = () => {

  
  const dispatch = useDispatch();
  const userList = useSelector(state => state.userList);
  const {loading,error,users} = userList;

  const createUser = useSelector(state => state.createUser);
  const {success} = createUser;

  

  useEffect(() => {
   dispatch(listUsers())
   if(success){
    dispatch(resetUser())
   }
   
  }, [dispatch,success])

  


    return (
        <>
       { error ? <Message variant='danger'>{error}</Message>:
       <div data-aos='zoom-in' className='table'>
       {loading ? <Loader/> : <h1>Users Table</h1>}
        <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>Username</th>
      <th>Email</th>
      <th>Age</th>
    </tr>
  </thead>
  
  <tbody> 
    {users.map((user,index) => (

    <tr key={user._id}>
      <td>{index + 1}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{user.age}</td>
    </tr>

    ))}
  </tbody>
   
</Table>
        </div>
        }
       
        </>
    )
}

export default Users
