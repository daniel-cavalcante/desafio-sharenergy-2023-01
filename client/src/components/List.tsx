import { ClientUser, RandomUser } from "./User.types";
import { nanoid } from "nanoid";

const UserList = (users: {
  list: Array<ClientUser | RandomUser>;
}): JSX.Element => {
  return (
    <ul className='user-list'>
      {users.list.map((item) => {
        if (isRandomUser(item)) {
          return (
            <li key={nanoid()}>
              <RandomUserCard user={item} />
            </li>
          );
        } else {
          return (
            <li key={nanoid()}>
              <ClientUserCard user={item} />
            </li>
          );
        }
      })}
    </ul>
  );
};

const RandomUserCard = (props: { user: RandomUser }) => {
  return (
    <div className='random-user-wrapper'>
      <div className='random-user-pic'>
        <img src={props.user.picture} alt='Profile avatar.' />
      </div>
      <ul className='random-user-info'>
        {props.user.name}
        <li>({props.user.username})</li>
        <li>{props.user.email}</li>
        <li>{props.user.age}</li>
      </ul>
    </div>
  );
};

const ClientUserCard = (props: { user: ClientUser }) => {
  return (
    <div className='client-user-wrapper'>
      <ul className='client-user-info'>
        <li>{props.user.name}</li>
        <li>{props.user.email}</li>
        <li>{props.user.phone}</li>
        <li>{props.user.location}</li>
        <li>{props.user.id}</li>
      </ul>
    </div>
  );
};

function isRandomUser(user: ClientUser | RandomUser): user is RandomUser {
  return (user as RandomUser).picture !== undefined;
}

export default UserList;
