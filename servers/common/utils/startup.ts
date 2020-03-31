import { Express, json, Router } from 'express';
import logger from '@server-common/utils/logger';
import { config } from 'dotenv';
import { resolve } from 'path';
import { connectToDB } from './database';
import * as cors from 'cors';

/**
 * Register Express Routes.
 *
 * @param api Express intance to configure
 */
export const registerExpressServerRoutes = (api: Express, routes: Router) => {
    api.use(
        cors({
            origin: 'http://dev.tlis.sk:3030',
            credentials: true
        })
    );
    api.use(json());
    api.use(routes);
};

/**
 * Configure express instance.
 *
 * @param api Express intance to configure
 */
export const configureExpressServer = (api: Express) => {
    api.set('port', 8080);
    config({
        path: resolve(__dirname, '../.env')
    });
    connectToDB();
    logger.info('Express configured.');
};

/**
 * Start Express server.
 *
 * @param api Express intance to start
 */
export const startExpressServer = (api: Express) => {
    const appPort = api.get('port');
    api.listen(appPort, () => {
        logger.info(`Api listening on port: ${appPort}`);
    });
};
