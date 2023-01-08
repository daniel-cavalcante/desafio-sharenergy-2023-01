import { RandomUser } from "../User.types";
import Title from "../Title";
import UserList from "../List";
import SearchBar from "./SearchBar";
import PageSelector from "./PageSelector";
import axios from "axios";
import { useEffect, useState } from "react";

const RandomUserPage = (): JSX.Element => {
  const [randomUsers, setRandomUsers] = useState<RandomUser[]>([]);
  const [page, setPage] = useState<number>(1);
  const [maxPages] = useState<number>(5);

  useEffect(() => {
    getRandomUsers(page);
  }, [page]);

  const getRandomUsers = async (pageNumber: number) => {
    try {
      const response = await axios.get<RandomUser[]>(
        `http://localhost:5000/api/v1/random-user-generator/${pageNumber}`
      );
      setRandomUsers(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const decrement = () => {
    if (page - 1 >= 1) {
      setPage(page - 1);
    }
  };

  const increment = () => {
    if (page + 1 <= maxPages) {
      setPage(page + 1);
    }
  };

  const changePage = (page: number) => {
    setPage(page);
  };

  return (
    <>
      <div id='random-user-page-wrapper'>
        <div id='random-user-title-search-wrapper'>
          <Title title={"random users"} />
          <SearchBar />
        </div>
        <UserList list={randomUsers} />
        <PageSelector
          pages={maxPages}
          currentPage={page}
          changePage={changePage}
          decrement={decrement}
          increment={increment}
        />
      </div>
    </>
  );
};

export default RandomUserPage;
