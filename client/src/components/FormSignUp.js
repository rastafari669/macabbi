import React from 'react';
import useForm from './useForm';
import validate from './ValidateInfo';
import './css/Form.css';
import {Alert} from 'react-bootstrap';


const FormSignUp = ({submitForm,error,success,loading}) => {

    const {handleChange,values,handleSubmit,errors} = useForm(validate,submitForm);

    return (
      <div className="form-content-right">
          <form  className="form" onSubmit={handleSubmit}>
              <h1>Please fill your info to create a new user</h1>
              <div className="form-inputs">
                  <label  className="form-label">
                     Your Username
                  </label>
                  <input 
                  id='username'
                      type="text" 
                      name='username' 
                      className="form-input"
                      placeholder='Enter your Username...'
                      value={values.username}
                      onChange={handleChange}
                      pattern="[A-Za-z]+"
                      />

                      {errors.username && <p>{errors.username}</p>}
              </div>
              

              <div className="form-inputs">
                  <label className="form-label">
                     Your Email
                  </label>
                  <input 
                      type="email" 
                      name='email' 
                      className="form-input"
                      placeholder='Enter your Email...'
                      value={values.email}
                      onChange={handleChange}
                      />

                      {errors.email && <p>{errors.email}</p>}
              </div>
              

              <div className="form-inputs">
                  <label className="form-label">
                     Your age
                  </label>
                  <input 
                      type="number" 
                      name='age' 
                      className="form-input"
                      placeholder='Enter your Age...'
                      value={values.age}
                      onChange={handleChange}
                      />
                      {errors.age && <p>{errors.age}</p>}
              </div>
             
              
               <button className='form-input-btn' type='submit'>Create User</button>



              <br/>
              {
                  error ? <Alert variant='danger'>{error}</Alert> : 
                  success ? <Alert variant='success'>User successfully created!</Alert> 
                  : null}
              
          </form>
      
      </div>
    )
}

export default FormSignUp
