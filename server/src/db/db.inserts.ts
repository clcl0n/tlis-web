import { db } from '.';
import IDayProgramPartDocument from '@src/typings/interfaces/db/IDayProgramPartDocument';
import IDayProgramDocument from '@src/typings/interfaces/db/IDayProgramDocument';
import logger from '@utils/logger';
import IWebAdminDocument from '@src/typings/interfaces/db/IWebAdminDocument';
import { hashPassword } from '@utils/password.utils';

export const webAdminsDBInsert = async (username: string, plaintextPassword: string, isRoot = false) => {
    const newWebAdmin: IWebAdminDocument = {
        username: username,
        isRoot,
        password: hashPassword(plaintextPassword)
    };

    try {
        await db.collection('WebAdmins').insertOne(newWebAdmin);
        return true;
    } catch (error) {
        logger.error(error);
        return false;
    }
};

export const dayProgramPartsDBInsert = async (
    ...dayProgramPartDocuments: Array<IDayProgramPartDocument>
): Promise<void> => {
    try {
        await db.collection('DayProgramPart').insertMany(dayProgramPartDocuments);
    } catch (error) {
        logger.error(error);
        throw error;
    }
};

export const dayProgramDBInsert = async (...dayProgramDocuments: Array<IDayProgramDocument>): Promise<void> => {
    try {
        await db.collection('DayProgram').insertMany(dayProgramDocuments);
    } catch (error) {
        logger.error(error);
        throw error;
    }
};
