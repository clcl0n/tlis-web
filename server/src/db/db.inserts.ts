import { db } from '.';
import IProgramPartDocument from '@src/typings/interfaces/db/IProgramPartDocument';
import IProgramDocument from '@src/typings/interfaces/db/IProgramDocument';
import logger from '@utils/logger';
import IAdminDocument from '@src/typings/interfaces/db/IAdminDocument';
import { hashPassword } from '@utils/password.utils';

export const webAdminsDBInsert = async (username: string, plaintextPassword: string, isRoot = false) => {
    const newWebAdmin: IAdminDocument = {
        username: username,
        isRoot,
        password: hashPassword(plaintextPassword)
    };

    try {
        await db.collection('Admins').insertOne(newWebAdmin);
        return true;
    } catch (error) {
        logger.error(error);
        return false;
    }
};

export const dayProgramPartsDBInsert = async (
    ...dayProgramPartDocuments: Array<IProgramPartDocument>
): Promise<void> => {
    try {
        await db.collection('ProgramPart').insertMany(dayProgramPartDocuments);
    } catch (error) {
        logger.error(error);
        throw error;
    }
};

export const dayProgramDBInsert = async (...dayProgramDocuments: Array<IProgramDocument>): Promise<void> => {
    try {
        await db.collection('Program').insertMany(dayProgramDocuments);
    } catch (error) {
        logger.error(error);
        throw error;
    }
};
