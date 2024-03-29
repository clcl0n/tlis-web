import { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';

export const paginationByIdValidationRules = () => {
    return [
        body('pageSize').isNumeric(),
        body('lastId')
            .optional()
            .isString()
    ];
};

export const addNewProgramValidationRules = () => {
    return [
        body('program').notEmpty(),
        body(['program.title', 'program.description', 'program.date', 'program.imageUrl']).isString(),
        body('programParts').notEmpty(),
        body(['programParts.*.title', 'programParts.*.description']).isString(),
        body('programParts.*.airtime').isNumeric()
    ];
};

export const deleteRefreshTokenValidationRules = () => {
    return [body('refreshToken')];
};

export const refreshAccessTokenRequestValidationRules = () => {
    return [body('refreshToken').isString()];
};

export const accessTokenRequestValidationRules = () => {
    return [body('username').isString(), body('password').isString()];
};

export const webAdminValidationRules = () => {
    return [
        body('username').isLength({ min: 5 }),
        body('password').isLength({ min: 6, max: 12 }),
        body('isRoot').isBoolean()
    ];
};

export const validate = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) return next();

    // const extractedErrors = [];
    // errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }));

    return res.status(422).json({
        errors: errors.array()
    });
};
