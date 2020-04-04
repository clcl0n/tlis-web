import { body } from 'express-validator';

export const addNewProgramValidationRules = () => {
    return [
        body('program').notEmpty(),
        body(['program.title', 'program.description', 'program.date', 'program.imageUrl']).isString(),
        body('programParts').notEmpty(),
        body(['programParts.*.title', 'programParts.*.description']).isString(),
        body('programParts.*.airtime').isNumeric()
    ];
};
