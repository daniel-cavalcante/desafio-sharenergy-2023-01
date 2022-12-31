import axios, { AxiosResponse, AxiosStatic } from 'axios';
import bodyParser from 'body-parser';
import express, { Application, Request, Response } from 'express';
import { RandomUserGeneratorResponse } from './clients/randomUser';

const app: Application = express();
const port = 5000;

app.use(bodyParser.json());

app.get('/', async (_: Request, res: Response): Promise<Response> => {
  return res.status(200).send({
    success: true,
  });
});

app.get(
  '/random-user-generator',
  async (_: Request, res: Response): Promise<Response> => {
    const response = new RandomUserGeneratorResponse(axios);
    const list = await response.fetchUsers(10);
    console.log(list);

    return res.status(200).json(list);
  }
);

try {
  app.listen(port, (): void => {
    console.log(`Connected successfully on port ${port}`);
  });
} catch (error) {
  console.error(`Error occured: ${(error as Error).message}`);
}
