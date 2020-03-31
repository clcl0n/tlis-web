import { connect, Db } from 'mongodb';
import logger from '@server-common/utils/logger';

export let db: Db = null;

export const connectToDB = async () => {
    await connect(
        'mongodb://tlis:tlis@tlisdevmongo:27017/?authSource=tlis&readPreference=primary&appname=MongoDB%20Compass&ssl=false',
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
