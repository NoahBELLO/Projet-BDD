import { Client } from "pg";

const client = new Client({
    host: process.env.PostgreSql_Host,
    user: process.env.PostgreSql_User,
    password: process.env.PostgreSql_Password,
    database: process.env.PostgreSql_Database
});

client.connect();
export default client;