import ICreateNewAdminDTO from '@src/typings/ICreateNewAdminDTO';
import { addNewAdmin } from '@src/database/admin';

export const createNewAdminService = (createNewAdminDTO: ICreateNewAdminDTO) => {
    addNewAdmin(createNewAdminDTO.username, createNewAdminDTO.isRoot, createNewAdminDTO.password);
};
