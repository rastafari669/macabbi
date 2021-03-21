export default function validateInfo (values){
    let errors = {}

    //Username
    if(!values.username.trim()){
        errors.username = 'Username is required'
    }

    //Email
    if(!values.email){
        errors.email = 'Email is required'
    } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(values.email)){
        errors.email = 'Email address is invalid'
    }
    //Age
    if(!values.age){
        errors.age = 'Age is required'
    }

    return errors;
}