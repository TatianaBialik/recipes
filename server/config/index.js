import dotenv from 'dotenv';
dotenv.config();

export const config = {
  db: {
    uri: process.env.MONGO_DB_URI,
  },
  server: {
    port: 5000,
  },
};