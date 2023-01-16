import axios from "axios";

let requestInstance = axios.create({
  headers: {
    authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
  },
});

export default requestInstance;
