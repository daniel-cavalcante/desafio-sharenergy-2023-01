import { ClientUser, RandomUser } from "./User.types";
import { nanoid } from "nanoid";
import { useState } from "react";

const UserList = (users: { list: Array<ClientUser | RandomUser> }) => {
  if (isRandomUserArray(users)) {
    return <ul id='random-user-list'>{Lister(users.list)}</ul>;
  } else {
    return <ol id='client-user-list'>{Lister(users.list)}</ol>;
  }
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
  const [expanded, setExpanded] = useState(false);

  const expand = () => {
    setExpanded(!expanded);
  };

  const deleteUser = () => {};

  return (
    <div className='client-user-wrapper'>
      <div className='client-user-name-buttons-wrapper'>
        <span className='client-user-name' onClick={expand}>
          {props.user.name}
        </span>
        <button className='button client-user-button' onClick={expand}>
          {expanded ? "less" : "info"}
        </button>
      </div>

      {expanded ? (
        <ClientUserCardInfo user={props.user} deleteUser={deleteUser} />
      ) : (
        <></>
      )}
    </div>
  );
};

const ClientUserCardInfo = (props: {
  user: ClientUser;
  deleteUser: () => void;
}) => {
  return (
    <>
      <ul className='client-user-detailed-info'>
        <li>
          <span className='client-user-info'>e-mail: </span>
          {props.user.email}
        </li>
        <li>
          <span className='client-user-info'>telefone: </span>
          {props.user.phone}
        </li>
        <li>
          <span className='client-user-info'>endereço: </span>
          <div>{props.user.location}</div>
        </li>
        <li>
          <span className='client-user-info'>CPF: </span>
          {props.user.id}
        </li>
      </ul>
      <div className='client-user-edit-delete-wrapper'>
        <button className='button client-user-button'>edit</button>
        <button
          className='button client-user-button'
          onClick={props.deleteUser}
        >
          delete
        </button>
      </div>
    </>
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
