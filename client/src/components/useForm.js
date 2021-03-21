import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {createUser} from '../actions/userActions';

const useForm = (validate) =>{

    const dispatch = useDispatch();

    const [values,setValues] = useState({
        username: '',
        email: '',
        age: ''
    })

    const [errors,setErrors] = useState({})
    const [isSubmmiting,setIsSubmiting] = useState(false)

    const handleChange = e =>{
        const {name,value} = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = e =>{
        e.preventDefault();
        setErrors(validate(values))
        setIsSubmiting(true)
        if(values.username !== '' && values.email !== '' && values.age !== ''){
            dispatch(createUser(values.username,values.email,values.age))
       console.log(Object.keys(errors).length === 0); 
           
        }

    };

    // useEffect(() =>{
    //     if(Object.keys(errors).length === 0 && isSubmmiting){
    //         //callback();
    //     }
    // },[errors]);

    return {handleChange,values,handleSubmit,errors}

}


export default useForm;