import {toast} from 'react-toastify';

const blog=(title,description,image)=>{
    if(title===""||description===""||image===null){
        toast.error("Please provide all required Credentials",{position:"top-center"});
        return false;
    }
    return true;
};

export default blog;