import { Application } from 'express';
import { ClickHouseProxy, PostgreSqlProxy } from '../middleware/proxy';

function ClickHouseRoutes(app: Application) {
    app.get('/apiClickHouse', ClickHouseProxy);
    app.post('/apiClickHouse', ClickHouseProxy);
}

function PostgreSqlRoutes(app: Application) {
    app.get('/apiPostgreSql', PostgreSqlProxy);
    app.post('/apiPostgreSql', PostgreSqlProxy);
}

export { ClickHouseRoutes, PostgreSqlRoutes };