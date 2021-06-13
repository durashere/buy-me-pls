import mongoose from 'mongoose';

const dbConnect = (handler) => async (req, res) => {
  if (mongoose.connection.readyState >= 1) {
    return handler(req, res);
  }
  // Use new db connection
  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    autoIndex: true,
    keepAlive: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
  return handler(req, res);
};

export default dbConnect;
