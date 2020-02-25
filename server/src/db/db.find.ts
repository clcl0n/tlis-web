import { db } from '.';
import logger from '@utils/logger';
import IWebAdminDocument from '@src/typings/interfaces/db/IWebAdminDocument';

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
