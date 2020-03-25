import { Request, Response } from 'express';
import { uploadImageService } from '@src/services/uploadService';

export const postUploadImage = async (req: Request, res: Response) => {
    if (!req.file) {
        res.status(401).json({ error: 'Please provide an image' });
        return;
    }
    const filename = uploadImageService(req.file.buffer);
    return res.status(200).json({ name: filename });
};
