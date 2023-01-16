import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import RegisteredUser from '../models/registeredUser';
import jwt from 'jsonwebtoken';

const secret = 'secretSign';

const register = async (req: Request, res: Response, next: () => void) => {
  const { username, email, password } = req.body;

  try {
    const newRegisteredUser = await RegisteredUser.create({
      username: username,
      email: email.toLowerCase(),
      password: await bcrypt.hash(password, 10),
    });

    const token = jwt.sign(
      {
        newRegisteredUser_id: newRegisteredUser._id,
        email: email.toLowerCase(),
      },
      secret,
      {
        expiresIn: '5h',
      }
    );

    newRegisteredUser.token = token;

    res.status(201).json(newRegisteredUser);
  } catch (error) {
    res.status(400).send({ success: false });
    return next();
  }
};

const login = async (req: Request, res: Response, next: () => void) => {
  const { username, password } = req.body;

  try {
    const registeredUser = await RegisteredUser.findOne({ username: username });

    if (registeredUser) {
      bcrypt.compare(password, registeredUser.password).then(function (result) {
        if (result) {
          const token = jwt.sign(
            { registeredUser_id: registeredUser._id },
            secret,
            {
              expiresIn: '5h',
            }
          );

          registeredUser.token = token;

          res.send({ accessToken: token });
          // return next();
        } else {
          res.status(400).send({ success: false });
          return next();
        }
      });
    }
  } catch (error) {
    res.status(400).send({ success: false });
    return next();
  }
};

const verifyToken = async (req: Request, res: Response, next: () => void) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (token === undefined) {
      res.sendStatus(401);
    } else {
      jwt.verify(token, secret, (err: any, user: any): void => {
        if (err) {
          res.status(401).send('Invalid Token');
        } else {
          next();
        }
      });
    }
  } catch (err) {
    res.status(401).send('Invalid Token');
  }
};

export { login, register, verifyToken };
