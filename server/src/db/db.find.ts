import { db } from '.';
import logger from '@utils/logger';

export const authorizeWebAdmin = async (username: string, password: string) => {
    try {
        const webAdmin = await db.collection('WebAdmins').findOne({ username, password });
        return webAdmin !== null;
    } catch (error) {
        logger.error(error);
        return false;
    }
};

// export const getCurrentDayProgramDB = () => {
//     db.collection('DayProgram').findOne({ $where: '' })
// };
