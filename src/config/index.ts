export const PORT = process.env.APP_PORT
  ? parseInt(process.env.APP_PORT, 10)
  : 4000;
export const { MONGO_HOST, MONGO_PORT, MONGO_DATABASE } = process.env;
