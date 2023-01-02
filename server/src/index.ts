import path from 'path';
import axios, { Axios, AxiosError } from 'axios';
import bodyParser from 'body-parser';
import express, { Application, Request, Response } from 'express';
import { RandomUserGeneratorResponse } from './clients/randomUser';
import { Dogs } from './clients/refreshDog';

const app: Application = express();
const port = 5000;

app.use(bodyParser.json());

app.get('/', async (_: Request, res: Response): Promise<Response> => {
  return res.status(200).send({
    success: true,
  });
});

app.get(
  '/api/v1/random-user-generator',
  async (_: Request, res: Response): Promise<Response> => {
    const response = new RandomUserGeneratorResponse(axios);
    const list = await response.fetchUsers(1);

    return res.status(200).json(list);
  }
);

app.get(
  '/api/v1/random-user-generator/query',
  async (req: Request, res: Response): Promise<Response> => {
    const response = new RandomUserGeneratorResponse(axios);
    const { keywords } = req.query;
    if (typeof keywords === 'string') {
      const userList = await response.searchFor(keywords);
      return res.status(200).send(userList);
    } else {
      return res.status(200).send({ error: 'Query is not a string!' });
    }
  }
);

app.get(
  '/api/v1/status-code/:code',
  async (req: Request, res: Response): Promise<void> => {
    const url = `https://http.cat/${req.params.code}`;

    try {
      const response = await axios.get(url, {
        responseType: 'arraybuffer',
      });

      const image = Buffer.from(response.data, 'binary');

      res.writeHead(200, {
        'Content-Type': 'image/png',
        'Content-Length': image.length,
      });

      res.end(image);
    } catch (error: unknown) {
      if (error instanceof AxiosError && error.response?.status === 404) {
        const file = path.join(__dirname, '/util/404.jpeg');
        return res.status(200).sendFile(file);
      } else {
        res.status(500).send({ error: 'Internal server error.' });
        console.error((error as AxiosError).cause);
      }
    }
  }
);

app.get(
  '/api/v1/refresh-dog',
  async (_: Request, res: Response): Promise<any> => {
    const url = 'https://random.dog/';

    try {
      const doggos = new Dogs(axios);
      await doggos.init();

      const response = await axios.get(url + doggos.fetchRandom(), {
        responseType: 'arraybuffer',
      });

      const image = Buffer.from(response.data, 'binary');

      res.writeHead(200, {
        'Content-Type': 'image/jpeg',
        'Content-Length': image.length,
      });

      res.end(image);
    } catch (error: unknown) {
      res.status(500).send({ error: 'Internal server error.' });
      console.error((error as AxiosError).cause);
    }
  }
);

try {
  app.listen(port, (): void => {
    console.log(`Connected successfully on port ${port}`);
  });
} catch (error) {
  console.error(`Error occured: ${(error as Error).message}`);
}
