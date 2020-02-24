import { db } from '.';
import IDayProgramPartDocument from '@src/typings/interfaces/db/IDayProgramPartDocument';
import IDayProgramDocument from '@src/typings/interfaces/db/IDayProgramDocument';
import logger from '@utils/logger';

export const dayProgramPartsDBInsert = async (
    ...dayProgramPartDocuments: Array<IDayProgramPartDocument>
): Promise<boolean> => {
    if (dayProgramPartDocuments.length === 0) {
        try {
            console.warn(dayProgramPartDocuments[0]);
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
