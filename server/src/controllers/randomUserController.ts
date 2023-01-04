import { Request, Response } from 'express';
import axios from 'axios';
import { RandomUserGeneratorResponse } from '../clients/randomUser';

const getRandomUsers = async (_: Request, res: Response): Promise<Response> => {
  const response = new RandomUserGeneratorResponse(axios);
  const list = await response.fetchUsers(1);

  return res.status(200).json(list);
};

const searchRandomUsers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const response = new RandomUserGeneratorResponse(axios);
  const { keywords } = req.query;
  if (typeof keywords === 'string') {
    const userList = await response.searchFor(keywords);
    return res.status(200).send(userList);
  } else {
    return res.status(200).send({ error: 'Query is not a string!' });
  }
};

export { getRandomUsers, searchRandomUsers };
