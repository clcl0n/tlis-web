import { db } from '.';
import logger from '@utils/logger';
import IWebAdminDocument from '@src/typings/interfaces/db/IWebAdminDocument';
import { ObjectID, Cursor } from 'mongodb';
import IDayProgramDocument from '@src/typings/interfaces/db/IDayProgramDocument';

export const findDayProgramPart = async (dayProgramPartId: ObjectID) => {
    try {
        return await db.collection('DayProgramParts').find(dayProgramPartId);
    } catch (error) {
        logger.error(error);
        throw error;
    }
};

export const paginationDayProgramById = async (pageSize: number, lastId?: string) => {
    try {
        let dayPrograms: Array<IDayProgramDocument>;
        if (lastId) {
            dayPrograms = await db
                .collection('DayProgram')
                .find({ _id: { $lt: ObjectID.createFromHexString(lastId) } })
                .sort({ $natural: -1 })
                .limit(pageSize)
                .toArray();
        } else {
            dayPrograms = await db
                .collection('DayProgram')
                .find()
                .sort({ $natural: -1 })
                .limit(pageSize)
                .toArray();
        }

        return dayPrograms;
    } catch (error) {
        logger.error(error);
        throw error;
    }
};

export const findWebAdmin = async (username: string): Promise<IWebAdminDocument | null> => {
    try {
        return await db.collection('WebAdmins').findOne({ username });
    } catch (error) {
        logger.error(error);
        return null;
    }
};

// export const getCurrentDayProgramDB = () => {
//     db.collection('DayProgram').findOne({ $where: '' })
// };
