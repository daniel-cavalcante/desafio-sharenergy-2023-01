import { RandomUser } from "../Utils/User.types";
import { nanoid } from "nanoid";

const RandomUserList = (users: { list: Array<RandomUser> }) => {
  const usersList = users.list.map((item) => {
    return (
      <li key={nanoid()}>
        <RandomUserCard user={item} />
      </li>
    );
  });
  return <ul id='random-user-list'>{usersList}</ul>;
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

// function isRandomUser(user: ClientUser | RandomUser): user is RandomUser {
//   return (user as RandomUser).picture !== undefined;
// }

// function isRandomUserArray(users: {
//   list: Array<ClientUser | RandomUser>;
// }): users is { list: Array<RandomUser> } {
//   return Boolean(
//     users?.list?.length && (users.list[0] as RandomUser).picture !== undefined
//   );
// }

export default RandomUserList;
