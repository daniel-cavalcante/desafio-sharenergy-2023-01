import { Request, Response } from 'express';
import path from 'path';
import axios, { AxiosError } from 'axios';

const sendCat = async (req: Request, res: Response): Promise<void> => {
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
      const file = path.join(__dirname, '../util/404.jpeg');
      return res.status(200).sendFile(file);
    } else {
      res.status(500).send({ error: 'Internal server error.' });
      console.error((error as AxiosError).cause);
    }
  }
};

export default sendCat;
