import multer from 'multer';
import path from 'path';

const checkImage=(req,file,cb)=>{
    const types=/png|jpg|<jpeg /
    //we can do the if(types.test(file.mimetype)) also
    const allowedImageTypes=['image/png', 'image/jpg', 'image/jpeg'];
    if(allowedImageTypes.includes(file.mimetype)){
        cb(null,true);
    }
    else{
        cb(new Error('Invalid file type'),false);
    }
};

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
    const dist=path.resolve('./upload/blog');
    return cb(null,dist);
    },
    filename:(req,file,cb)=>{
       const name=`${Date.now()}-${file.originalname}`;
       return cb(null,name);
    }
})

const upload=multer({storage:storage,fileFilter:checkImage});
export default upload;