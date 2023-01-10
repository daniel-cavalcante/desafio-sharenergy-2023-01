interface User {
  name: string;
  email: string;
}

interface RandomUser extends User {
  username: string;
  age: number;
  picture: string;
}

interface ClientUser extends User {
  _id: string;
  id: string;
  phone: string;
  location: string;
}

export type { User, RandomUser, ClientUser };

// const EmptyClientUser: ClientUser = {
//   name: "",
//   email: "",
//   _id: "",
//   id: "",
//   phone: "",
//   location: "",
// };

// export default EmptyClientUser;
