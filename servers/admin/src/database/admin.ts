import IAdminDocument from '@src/typings/IAdminDocument';
import logger from '@server-common/utils/logger';
import { db } from '@server-common/utils/database';
import { hashPassword } from '@server-common/utils/password';

export const addNewAdmin = async (username: string, isRoot: boolean, plaintextPassword: string) => {
    const newWebAdmin: IAdminDocument = {
        username: username,
        isRoot,
        password: hashPassword(plaintextPassword)
    };

    try {
        await db.collection('admins').insertOne(newWebAdmin);
        return true;
    } catch (error) {
        logger.error(error);
        return false;
    }
};
