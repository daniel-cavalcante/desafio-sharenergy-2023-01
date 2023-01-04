import { Request, Response } from 'express';
import User from '../models/user';

const getUserList = async (req: Request, res: Response) => {
  try {
    const data = await User.find({});
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
  }
};

export { getUserList };
