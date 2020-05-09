import mongoose from 'mongoose';
import { dbConnection } from '../configs';

export default () => {
  mongoose.connect(dbConnection, { useNewUrlParser: true });
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'Failed to connect to database'));
  db.once('open', () => {
    console.log('Successfully connected to MongoDb');
  });
};