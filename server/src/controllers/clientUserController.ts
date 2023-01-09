import { Request, Response } from 'express';
import User from '../models/user';

const getUserList = async (_: Request, res: Response) => {
  try {
    const data = await User.find({});
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
  }
};

const getUser = async (req: Request, res: Response) => {
  const { _id } = req.params;
  try {
    const specificUser = await User.findById(_id);
    res.status(200).send(specificUser);
  } catch (err) {
    console.error(err);
  }
};

const registerNewUser = async (req: Request, res: Response) => {
  try {
    const { name, email, id, phone, location }: { [key: string]: string } =
      req.body;

    const newEntry = new User({
      name: name,
      email: email,
      id: id,
      phone: phone,
      location: location,
    });

    await newEntry.save();

    res.status(200).send({ success: true });
  } catch (err) {
    console.error(err);
  }
};

const updateUserInfo = async (req: Request, res: Response) => {
  const { _id, name, email, id, phone, location } = req.body;

  try {
    if (typeof name !== 'undefined') {
      await User.findByIdAndUpdate(_id, { $set: { name: name } });
    }
    if (typeof email !== 'undefined') {
      await User.findByIdAndUpdate(_id, { $set: { email: email } });
    }
    if (typeof id !== 'undefined') {
      await User.findByIdAndUpdate(_id, { $set: { id: id } });
    }
    if (typeof phone !== 'undefined') {
      await User.findByIdAndUpdate(_id, { $set: { phone: phone } });
    }
    if (typeof location !== 'undefined') {
      await User.findByIdAndUpdate(_id, { $set: { location: location } });
    }

    res.status(200).send({ success: true });
  } catch (error) {
    console.error(error);
  }
};

const deleteUserEntry = async (req: Request, res: Response) => {
  const { _id } = req.body;

  try {
    await User.findByIdAndDelete(_id);

    res.status(200).send({ success: true });
  } catch (error) {
    console.error(error);
  }
};

export {
  getUserList,
  getUser,
  registerNewUser,
  updateUserInfo,
  deleteUserEntry,
};
