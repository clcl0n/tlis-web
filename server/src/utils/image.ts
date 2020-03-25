import * as sharp from 'sharp';
import { v4 } from 'uuid';
import { resolve, join } from 'path';

const folder = join(__dirname, '../../public/images');

export const resizeAndSaveImage = async (buffer: Buffer) => {
    const filename = `${v4()}.png`;
    const filepath = resolve(`${folder}/${filename}`);
    await sharp(buffer)
        .resize(300, 300, {
            fit: sharp.fit.inside,
            withoutEnlargement: true
        })
        .toFile(filepath);

    return filename;
};
