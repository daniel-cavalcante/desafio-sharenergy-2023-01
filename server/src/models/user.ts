import { model, Schema } from 'mongoose';

interface IUser {
  name: string;
  email: string;
  phone: string;
  location: string;
  id: string;
}

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

const User = model<IUser>('User', userSchema);

export default User;
