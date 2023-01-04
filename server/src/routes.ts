import { Router } from 'express';
import User from './models/user';
import { Request, Response } from 'express';

const router = Router();

router.get('/userCRUD', async (req: Request, res: Response) => {
  try {
    const data = await User.find({});
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
  }
});

export default router;
