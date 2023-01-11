import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Title from "../Utils/Title";
import { ClientUser } from "../Utils/User.types";
import ClientForm from "./ClientForm";

const EditClient = () => {
  const { _id } = useParams();
  const [userInfo, setUserInfo] = useState<ClientUser | undefined>();

  useEffect(() => {
    getUser();
  });

  const getUser = async () => {
    const response = await axios.get<ClientUser>(
      `http://localhost:5000/api/v1/clients/${_id}`
    );
    setUserInfo(response.data);
  };

  return (
    <div>
      <Title title={"Edit User Info"} />
      {isClientUser(userInfo) ? (
        <ClientForm userInfo={userInfo} />
      ) : (
        <div></div>
      )}
    </div>
  );
};

function isClientUser(user: ClientUser | undefined): user is ClientUser {
  return user?.name !== undefined;
}

export default EditClient;
