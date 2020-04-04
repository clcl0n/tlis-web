import { body } from 'express-validator';

export const webAdminValidationRules = () => {
    return [
        body('username').isLength({ min: 5 }),
        body('password').isLength({ min: 6, max: 12 }),
        body('isRoot').isBoolean()
    ];
};
