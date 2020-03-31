import * as express from 'express';
import { configureExpressServer, startExpressServer, registerExpressServerRoutes } from '@src/startup';

const api = express();
configureExpressServer(api);
startExpressServer(api);
registerExpressServerRoutes(api);
