import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RandomUser } from "../Utils/User.types";
import axios from "axios";
import UserList from "../Utils/List";
import Title from "../Utils/Title";
import SearchBar from "./SearchBar";

const SearchRandomUserPage = () => {
  const { keywords } = useParams();
  console.log(keywords);

  const [randomUsers, setRandomUsers] = useState<RandomUser[]>([]);

  useEffect(() => {
    searchRandomUsers(keywords);
  }, [keywords]);

  const searchRandomUsers = async (keywords: string | undefined) => {
    try {
      if (typeof keywords !== "undefined") {
        const response = await axios.get<RandomUser[]>(
          "http://localhost:5000/api/v1/random-user-generator/query?keywords=" +
            keywords
        );
        setRandomUsers(response.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div id='random-user-page-wrapper'>
        <div id='random-user-title-search-wrapper'>
          <Title title={"random users"} />
          <SearchBar />
        </div>
        <>
          <UserList list={randomUsers} />
        </>
      </div>
    </>
  );
};

export default SearchRandomUserPage;
