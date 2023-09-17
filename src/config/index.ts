export const PORT = process.env.APP_PORT
  ? parseInt(process.env.APP_PORT, 10)
  : 4000;
export const {
  MONGO_HOST,
  MONGO_PORT,
  MONGO_DATABASE,
  MONGO_USERNAME,
  MONGO_PASSWORD,
} = process.env;
export const MONGO_URI = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}`;
export const PAYLOAD_SECRET = process.env.PAYLOAD_SECRET || '';
