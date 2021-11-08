import { MongoClient } from 'mongodb';

const database = 'reshipi';
const url = `mongodb://localhost:27017/${database}`;

export const mongo = new MongoClient(url);
export default mongo;
