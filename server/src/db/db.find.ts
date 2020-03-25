import { db } from '.';
import logger from '@utils/logger';
import IAdminDocument from '@src/typings/interfaces/db/IAdminDocument';
import { ObjectID } from 'mongodb';
import IProgramDocument from '@src/typings/interfaces/db/IProgramDocument';

export const findDayProgramPart = async (dayProgramPartId: ObjectID) => {
    try {
        return await db.collection('ProgramParts').find(dayProgramPartId);
    } catch (error) {
        logger.error(error);
        throw error;
    }
};

export const paginationDayProgram = async (pageSize: number, lastId?: string) => {
    try {
        let dayPrograms: Array<IProgramDocument>;
        if (lastId) {
            dayPrograms = await db
                .collection('Program')
                .find({ _id: { $lt: ObjectID.createFromHexString(lastId) } })
                .sort({ $natural: -1 })
                .limit(pageSize)
                .toArray();
        } else {
            dayPrograms = await db
                .collection('Program')
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

export const findWebAdmin = async (username: string): Promise<IAdminDocument | null> => {
    try {
        return await db.collection('Admins').findOne({ username });
    } catch (error) {
        logger.error(error);
        return null;
    }
};

// export const getCurrentDayProgramDB = () => {
//     db.collection('DayProgram').findOne({ $where: '' })
// };
