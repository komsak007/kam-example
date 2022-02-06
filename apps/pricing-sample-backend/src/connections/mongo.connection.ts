import * as mongoose from 'mongoose';
export const connectToMongo = async (uri: string): Promise<void> => {
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
  // more : https://mongoosejs.com/docs/connections.html#connection-events
  mongoose.connection.on('error', (err) => {
    console.log('MongoDB connection error:', err);
  });
};
