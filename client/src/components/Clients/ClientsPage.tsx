import { ClientUser } from "../Utils/User.types";
import axios from "axios";
import { useState } from "react";

function Clients() {
  const [clientUsers, setClientUsers] = useState<ClientUser[]>([]);

  const getClientUsers = async (pageNumber: number) => {
    try {
      const response = await axios.get<ClientUser[]>(
        `http://localhost:5000/api/v1/`
      );
      setClientUsers(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  return <div>Page not found!</div>;
}

export default Clients;
