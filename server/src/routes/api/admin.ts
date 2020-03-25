import { Router } from 'express';
import AdminController, { postNewAdmin } from '@controllers/adminController';
import { authenticateToken } from '@src/middleware/token.middleware';
import { webAdminValidationRules, validate } from '@src/middleware/validation.middleware';

export class AdminRouter {
    private router!: Router;
    private controller!: AdminController;
    
    constructor() {
        this.controller = new AdminController();
        this.router = Router();
        this.router.post('/',  authenticateToken, webAdminValidationRules(), validate, this.controller.postNewAdmin);
    }

    public getRouter() {
        return this.router;
    }
}

const adminRouter = Router();

adminRouter.post('/', authenticateToken, webAdminValidationRules(), validate, postNewAdmin);

export default adminRouter;
