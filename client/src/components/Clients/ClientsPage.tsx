import { ClientUser } from "../Utils/User.types";
import axios from "axios";
import { useEffect, useState } from "react";
import ClientUserList from "./ClientUserList";
import Title from "../Utils/Title";

function Clients() {
  const [clientUsers, setClientUsers] = useState<ClientUser[]>([]);

  useEffect(() => {
    getClientUsers();
  }, []);

  const getClientUsers = async () => {
    try {
      const response = await axios.get<ClientUser[]>(
        `http://localhost:5000/api/v1/clients`
      );
      setClientUsers(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Title title={"clients list"} />
      <button className='button' id='add-client-button'>
        add a client
      </button>
      <div id='client-user-list-wrapper'>
        <ClientUserList list={clientUsers} />
      </div>
    </div>
  );
}

export default Clients;
