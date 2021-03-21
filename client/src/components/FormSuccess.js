import React from 'react';
import check from '../images/thank.jpeg';
import arrow from '../images/back-2.png';
import {resetUser} from '../actions/userActions';
import {useDispatch} from 'react-redux';



const FormSuccess = () => {

    const dispatch = useDispatch();

    return (
        <div className="form-content-right">
        <span className="close-btn" onClick={() => dispatch(resetUser())}>
                <img  className='back' style={{color:'white'}} src={arrow} alt="back arrow"/>
            </span>
            <div className="form-success">
                
                User successfully created!
            </div>
            <img src={check} alt="check-form" className='form-img-2'/>
        </div>
    )
}

export default FormSuccess
