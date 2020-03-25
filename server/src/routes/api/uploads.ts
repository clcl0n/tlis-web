import { Router } from 'express';
import { uploadImage } from '@src/middleware/upload.middleware';
import { postUploadImage } from '@controllers/uploadsController';

const uploadsRouter = Router();

uploadsRouter.post('/image', uploadImage.single('image'), postUploadImage);

export default uploadsRouter;