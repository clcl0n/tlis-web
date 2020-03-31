import logger from '@server-common/utils/logger';

export const findWebAdmin = async (username: string): Promise<IAdminDocument | null> => {
    try {
        return await db.collection('Admins').findOne({ username });
    } catch (error) {
        logger.error(error);
        return null;
    }
};
