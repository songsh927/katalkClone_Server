import multer from "multer";

const storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, 'data/profile/')
    },
    filename : (req, file, cb) => {
        cb(null, req.id + '_' + 'profile' + '_' + Date.now())
    }
})

export const profileUpload = multer({
    storage : storage
});

export const image = multer({dest: '../data/image'});


