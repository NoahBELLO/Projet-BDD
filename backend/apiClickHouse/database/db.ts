import { createClient } from '@clickhouse/client';

const client = createClient({
    url: process.env.ClickHouse_Url,
    username: process.env.ClickHouse_User,
    password: process.env.ClickHouse_Password,
    database: process.env.ClickHouse_Database
});

export default client;