import { db } from '@server-common/utils/database';
import logger from '@server-common/utils/logger';
import IAdminDocument from '@src/typings/interfaces/IAdminDocument';

export const getAdminByUsername = async (username: string): Promise<IAdminDocument | null> => {
    try {
        return await db.collection('admins').findOne({ username });
    } catch (error) {
        logger.error(error);
        return null;
    }
};
