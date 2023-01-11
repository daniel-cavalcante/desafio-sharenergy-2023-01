import { connect, set } from 'mongoose';

const runDB = async () => {
  try {
    const database = 'sharenergyDB';
    set('strictQuery', false);
    const setup = await connect(`mongodb://127.0.0.1:27017/${database}`, {});
    console.log(`Database connected : ${setup.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default runDB;
