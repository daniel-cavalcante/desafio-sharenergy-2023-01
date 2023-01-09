import { ClientUser, RandomUser } from "./User.types";
import { nanoid } from "nanoid";

const UserList = (users: { list: Array<ClientUser | RandomUser> }) => {
  let idNameSuffix: string = "";
  if (isRandomUserArray(users)) {
    idNameSuffix = "random-";
  } else {
    idNameSuffix = "client-";
  }
  return <ul id={`${idNameSuffix}user-list`}>{Lister(users.list)}</ul>;
};

const Lister = (list: Array<ClientUser | RandomUser>) => {
  return list.map((item) => {
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
  });
};

const RandomUserCard = (props: { user: RandomUser }) => {
  return (
    <div className='random-user-wrapper'>
      <div className='random-user-picture-frame'>
        <img
          className='random-user-picture'
          src={props.user.picture}
          alt='Profile avatar.'
        />
      </div>

      <div className='random-user-name-field'>{props.user.name}</div>
      <div className='random-user-info-field'>
        <ul>
          <li>
            <span className='random-user-username'>
              ({props.user.username})
            </span>
          </li>
          <li>{props.user.email}</li>
          <li>
            <span className='random-user-age'>{props.user.age}</span>
          </li>
        </ul>
      </div>
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

function isRandomUserArray(users: {
  list: Array<ClientUser | RandomUser>;
}): users is { list: Array<RandomUser> } {
  return Boolean(
    users?.list?.length && (users.list[0] as RandomUser).picture !== undefined
  );
}

export default UserList;
