import multer from 'multer';
import path from 'path';
const checkImage = (req, file, cb) => {
    const types = /png|jpg|jpeg/;
    const mimetype = types.test(file.mimetype);

    if (mimetype) {
        cb(null, true);
    } else {
        cb(new Error('Invalid file type'), false);
    }
};

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
    const dist=path.resolve('./upload/user');
    return cb(null,dist);
    },
    filename:(req,file,cb)=>{
       const name=`${Date.now()}-${file.originalname}`;
       return cb(null,name);
    }
})

const uploadUser=multer({storage:storage,fileFilter:checkImage});
export default uploadUser;