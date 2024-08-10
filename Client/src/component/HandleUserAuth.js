import {toast} from 'react-toastify';

const handleSignUp=(userName,email,password,userImage)=>{
    if(userName==='',email==='',password==='',userImage===null){
        toast.error("Please enter all required fields",{position:'top-center'});
        return false;
    }
    return true;
    

};
const handleLogin=(email,password)=>{
    if(email==='',password===''){
        toast.error("Please enter all required fields",{position:'top-center'});
        return false;
    }
    return true;
};
export {handleSignUp,handleLogin};