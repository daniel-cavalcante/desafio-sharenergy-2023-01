import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import user from '../util/singleUser';

const login = async (req: Request, res: Response, next: () => void) => {
  const { username, password } = req.body;

  try {
    bcrypt.compare(password, user.password).then(function (result) {
      if (result) {
        res.status(200).send({ success: true });
        return next();
      } else {
        res.status(400).send({ success: false });
        return next();
      }
    });
  } catch (error) {
    res.status(400).send({ success: false });
    return next();
  }
};

export { login };
