import bodyParser from 'body-parser';
import express, { Application, Request, Response } from 'express';
import runDB from './database/sharenergy';
import router from './routes';
import cors from 'cors';
import cookieParser from 'cookie-parser';

// import axios from 'axios';
// import { FakeUsers } from './util/userGenerator';
// const userList = new FakeUsers(axios);
// userList.writeOnDB();

const app: Application = express();
const port = 5000;

runDB();

app.use(bodyParser.json());
app.use(cors());

app.use('/api/v1/', router);

try {
  app.listen(port, (): void => {
    console.log(`Connected successfully on port ${port}`);
  });
} catch (error) {
  console.error(`Error occured: ${(error as Error).message}`);
}
