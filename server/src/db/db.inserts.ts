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
): Promise<boolean> => {
    if (dayProgramPartDocuments.length === 0) {
        try {
            await db.collection('DayProgramPart').insertOne(dayProgramPartDocuments[0]);
            return true;
        } catch (error) {
            logger.error(error);
            return false;
        }
    } else {
        try {
            await db.collection('DayProgramPart').insertMany(dayProgramPartDocuments);
            return true;
        } catch (error) {
            logger.error(error);
            return false;
        }
    }
};

export const dayProgramDBInsert = async (...dayProgramDocuments: Array<IDayProgramDocument>): Promise<boolean> => {
    if (dayProgramDocuments.length) {
        try {
            await db.collection('DayProgram').insertOne(dayProgramDocuments[0]);
            return true;
        } catch (error) {
            logger.error(error);
            return false;
        }
    } else {
        try {
            await db.collection('DayProgram').insertMany(dayProgramDocuments);
            return true;
        } catch (error) {
            logger.error(error);
            return false;
        }
    }
};
