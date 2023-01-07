import users from "../../util/dummy/dummyUser.json";
import { RandomUser } from "../User.types";
import Title from "../Title";
import UserList from "../List";
import SearchBar from "./SearchBar";
import PageSelector from "./PageSelector";

const RandomUserPage = (): JSX.Element => {
  const list: Array<RandomUser> = users.users;
  const pages: number =
    list.length % 12 === 0
      ? list.length / 12
      : Math.floor(list.length / 12) + 1;
  // Devo trocar por uma funçao que recebe um parâmetro de página! Para poder passar para o fetchUsers no backend

  return (
    <>
      <div id='random-user-page-wrapper'>
        <div id='random-user-title-search-wrapper'>
          <Title title={"random users"} />
          <SearchBar />
        </div>
        <UserList list={list} />
        <PageSelector pages={pages} />
      </div>
    </>
  );
};

export default RandomUserPage;
