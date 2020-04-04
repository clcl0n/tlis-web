import IProgramDocument from '@src/../../../common/typings/db/IProgramDocument';
import IProgramPartDocument from '@src/../../../common/typings/db/IProgramPartDocument';

export default interface INewProgramDTO {
    program: IProgramDocument;
    programParts: Array<IProgramPartDocument>;
}
