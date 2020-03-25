import ICreateNewAdminDTO from '@src/typings/interfaces/dto/ICreateNewAdminDTO';
import { webAdminsDBInsert } from '@src/db/db.inserts';

export const createNewAdminService = async (createNewAdminDTO: ICreateNewAdminDTO) => {
    await webAdminsDBInsert(createNewAdminDTO.username, createNewAdminDTO.password, createNewAdminDTO.isRoot);
};
