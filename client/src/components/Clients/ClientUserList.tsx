import { ClientUser } from "../Utils/User.types";
import { nanoid } from "nanoid";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ClientUserList = (users: { list: Array<ClientUser> }) => {
  const usersList = users.list.map((item) => {
    return (
      <li key={nanoid()}>
        <ClientUserCard user={item} />
      </li>
    );
  });

  return <ol id='client-user-list'>{usersList}</ol>;
};

const ClientUserCard = (props: { user: ClientUser }) => {
  const [expanded, setExpanded] = useState(false);
  const [userInfo] = useState<ClientUser>(props.user);

  const expand = () => {
    setExpanded(!expanded);
  };

  const deleteUser = async () => {
    try {
      await axios.delete("http://localhost:5000/api/v1/clients", {
        data: { _id: props.user._id },
      });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='client-user-wrapper'>
      <div className='client-user-name-buttons-wrapper'>
        <span className='client-user-name' onClick={expand}>
          {userInfo.name}
        </span>
        <button className='button client-user-button' onClick={expand}>
          {expanded ? "less" : "info"}
        </button>
      </div>

      {expanded ? (
        <ClientUserCardInfo user={userInfo} deleteUser={deleteUser} />
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
        <Link to={`/clients/edit/${props.user._id}`}>
          <button className='button client-user-button'>edit</button>
        </Link>
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

export default ClientUserList;
