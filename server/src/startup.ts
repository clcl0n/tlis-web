import { Express, json } from 'express';
import { createLogger, format, info, transports } from 'winston';
import routes from './routes';
import logger from '@logger';
import { config } from 'dotenv';
import { resolve } from 'path';
import { connectToDB } from './db';

/**
 * Register Express Routes.
 *
 * @param api Express intance to configure
 */
export const registerExpressServerRoutes = (api: Express) => {
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
