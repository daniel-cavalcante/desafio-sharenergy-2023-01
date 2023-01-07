// import users from "../../util/dummy/dummyUser.json";
import { RandomUser } from "../User.types";
import Title from "../Title";
import UserList from "../List";
import SearchBar from "./SearchBar";
import PageSelector from "./PageSelector";
import axios from "axios";
import { useEffect, useState } from "react";

const RandomUserPage = (): JSX.Element => {
  // const list: Array<RandomUser> = users.users;
  // const pages: number =
  // list.length % 12 === 0
  // ? list.length / 12
  // : Math.floor(list.length / 12) + 1;
  // Devo trocar por uma funçao que recebe um parâmetro de página! Para poder passar para o fetchUsers no backend
  const [randomUsers, setRandomUsers] = useState<RandomUser[]>([]);

  const getRandomUsers = async () => {
    try {
      const response = await axios.get<RandomUser[]>(
        "http://localhost:5000/api/v1/random-user-generator"
      );
      setRandomUsers(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getRandomUsers();
  }, []);

  async function handleClick() {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/v1/random-user-generator"
      );
      console.log(response);
    } catch (err) {
      console.log("Errr");
      console.log(err);
    }
  }

  return (
    <>
      <div id='random-user-page-wrapper'>
        <div id='random-user-title-search-wrapper'>
          <Title title={"random users"} />
          <SearchBar />
        </div>
        <UserList list={randomUsers} />
        <PageSelector pages={5} />
        <button onClick={handleClick}>click me</button>
      </div>
    </>
  );
};

export default RandomUserPage;
