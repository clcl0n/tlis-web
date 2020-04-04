import { db } from '@server-common/utils/database';
import logger from '@server-common/utils/logger';
import IProgramPartDocument from '@common/typings/db/IProgramPartDocument';
import IProgramDocument from '@common/typings/db/IProgramDocument';

export const dayProgramPartsDBInsert = async (
    ...dayProgramPartDocuments: Array<IProgramPartDocument>
): Promise<void> => {
    try {
        await db.collection('program-part').insertMany(dayProgramPartDocuments);
    } catch (error) {
        logger.error(error);
        throw error;
    }
};

export const dayProgramDBInsert = async (...dayProgramDocuments: Array<IProgramDocument>): Promise<void> => {
    try {
        await db.collection('program').insertMany(dayProgramDocuments);
    } catch (error) {
        logger.error(error);
        throw error;
    }
};
