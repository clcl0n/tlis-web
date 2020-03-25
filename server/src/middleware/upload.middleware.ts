import * as multer from 'multer';

export const uploadImage = multer({
    limits: {
        fileSize: 4 * 1024 * 1024
    }
});