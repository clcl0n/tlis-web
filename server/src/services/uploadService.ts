import { resizeAndSaveImage } from '@utils/image';

export const uploadImageService = async (image: Buffer) => {
    return resizeAndSaveImage(image);
};
