// import { MongoClient, ServerApiVersion, Collection, Db } from 'mongodb';
// import {UserModel} from './userModel';
// import {TokenModel} from './tokenModel';

// const uri: string = process.env.MONGO_URI_Noah as string;

// const client: MongoClient = new MongoClient(uri, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     },
// });
// export async function db() {
//     await client.connect();
//     const database: Db = client.db("BDDExpress");

//     UserModel.collection = database.collection("utilisateurs");
//     TokenModel.collection = database.collection("tokens");
// }
