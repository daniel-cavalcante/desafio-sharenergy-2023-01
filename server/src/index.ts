import bodyParser from 'body-parser';
import express, { Application, Request, Response } from 'express';
import runDB from './database/sharenergy';
import router from './routes';
// import { FakeUsers } from './util/userGenerator';
// const userList = new FakeUsers(axios);
// userList.writeOnDB();

const app: Application = express();
const port = 5000;

runDB();

app.use(bodyParser.json());

app.get('/', async (_: Request, res: Response): Promise<Response> => {
  return res.status(200).send({
    success: true,
  });
});

app.use('/api/v1/', router);

try {
  app.listen(port, (): void => {
    console.log(`Connected successfully on port ${port}`);
  });
} catch (error) {
  console.error(`Error occured: ${(error as Error).message}`);
}
