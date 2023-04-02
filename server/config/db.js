import mongoose from 'mongoose';
import { config } from './index.js';

export const DBconnect = async () => {
  try {
    const connect = await mongoose.connect(config.db.uri);
  } catch (err) {
    console.log(err)
  }
}