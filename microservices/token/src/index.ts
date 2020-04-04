import * as express from 'express';
import { configureExpressServer, startExpressServer, registerExpressServerRoutes } from '@server-common/utils/startup';
import routes from './routes';

const api = express();
configureExpressServer(api);
startExpressServer(api);
registerExpressServerRoutes(api, routes);
