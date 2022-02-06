import { environment } from '../environments/environment';
import { connectToMongo } from './mongo.connection';

export const setupConnection = async (): Promise<void> => {
  await connectToMongo(environment.mongoDB);
  // Setting up backend app goes here
};
