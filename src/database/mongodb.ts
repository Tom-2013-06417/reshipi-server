import { MongoClient } from 'mongodb';
import { MONGO_DATABASE, MONGO_HOST, MONGO_PORT } from '../config';

const url = `${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE}`;
export const mongo = new MongoClient(url);
export default mongo;
