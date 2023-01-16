import { model, Schema } from 'mongoose';

export interface IRegisteredUser {
  username: string;
  email: string;
  password: string;
  token: string;
}

const registeredUserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  token: {
    type: String,
  },
});

const RegisteredUser = model<IRegisteredUser>(
  'RegisteredUser',
  registeredUserSchema
);

export default RegisteredUser;
