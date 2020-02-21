import { Request, Response } from 'express';
import { name } from 'faker';

export const getRandomFakeName = (req: Request, res: Response) => {
    res.json({
        firstName: name.firstName(),
        lastName: name.lastName() 
    });
};