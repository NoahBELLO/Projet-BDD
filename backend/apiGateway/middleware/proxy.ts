import { Request, Response } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const optionsClickHouse = {
    target: process.env.ClickHouse_Url,
    changeOrigin: true,
    logger: console,
    // timeout: 60000, // 60 secondes
    // proxyTimeout: 60000, // 60 secondes pour la réponse
    onError: (err: Error, req: Request, res: Response) => {
        console.error(`ClickHouse Proxy Error: ${err.message}`);
        res.status(500).send('Something went wrong with the clickHouse service.');
    },
};

const optionsPostgreSql = {
    target: process.env.PostgreSql_Url,
    changeOrigin: true,
    logger: console,
    onError: (err: Error, req: Request, res: Response) => {
        console.error(`PostgreSql Proxy Error: ${err.message}`);
        res.status(500).send('Something went wrong with the postgreSql service.');
    },
};

const ClickHouseProxy = createProxyMiddleware(optionsClickHouse);
const PostgreSqlProxy = createProxyMiddleware(optionsPostgreSql);

export { ClickHouseProxy, PostgreSqlProxy };