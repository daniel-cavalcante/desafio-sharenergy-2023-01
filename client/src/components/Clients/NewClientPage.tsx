import axios from "axios";
import { useEffect, useState } from "react";
import Title from "../Utils/Title";
import EmptyClientUser, { ClientUser } from "../Utils/User.types";
import ClientForm from "./ClientForm";

const NewClient = () => {
  const [userInfo, setUserInfo] = useState<ClientUser>(EmptyClientUser);

  return (
    <div>
      <Title title={"Register New Client"} />
      <ClientForm userInfo={userInfo} isNew={true} />
    </div>
  );
};

export default NewClient;
