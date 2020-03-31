import { genSaltSync, hashSync, compareSync } from 'bcrypt';

export const hashPassword = (plainTextPassword: string) => {
    return hashSync(plainTextPassword, genSaltSync(12));
};

export const checkPassword = (plainTextPassword: string, hashPassword: string) => {
    return compareSync(plainTextPassword, hashPassword);
};
