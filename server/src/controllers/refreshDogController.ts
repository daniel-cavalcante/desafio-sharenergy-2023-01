import { Request, Response } from 'express';
import axios, { AxiosError } from 'axios';
import { Dogs } from '../externalAPIClients/refreshDog';

const getDog = async (_: Request, res: Response): Promise<any> => {
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
};

export default getDog;
