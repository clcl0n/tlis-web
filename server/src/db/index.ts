import { connect, Db } from 'mongodb';
import logger from '@utils/logger';

export let db: Db = null;

export const connectToDB = async () => {
    await connect(
        'mongodb://tlis:tlis@mongoDB:27017/admin?authSource=tlis&readPreference=primary&appname=MongoDB%20Compass&ssl=false',
        {
            useUnifiedTopology: true
        },
        (error, result) => {
            if (error) {
                logger.error('Cannot connect to mongoDB.');
            } else {
                logger.info('Successfuly connected to mongoDB.');
                db = result.db('tlis');
            }
        }
    );
};
