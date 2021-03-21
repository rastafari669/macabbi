import React from 'react'
import FormSignUp from './FormSignUp';
import FormSuccess from './FormSuccess';
import './css/Form.css';
import macab from '../images/macab.png';
import {useSelector} from 'react-redux';



const Form = () => {

  const createUser = useSelector(state => state.createUser);
  const {success,error,loading} = createUser;

 



    return (
        

        <div data-aos='zoom-in' className="form-container">
           
            <div className="form-content-left">
                <img src={macab} alt="success" className='form-img'/>
            </div>
            
         {success ? <FormSuccess/> :  <FormSignUp error={error} success={success} loading={loading} />  }    
            
        </div>
       

       
       
    )
    
}

export default Form
