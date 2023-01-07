import React, { useState } from "react";
import users from "../../util/dummy/dummyUser.json";
import { RandomUser } from "../User.types";
import Title from "../Title";
import UserList from "../List";
import SearchBar from "./SearchBar";

const RandomUserPage = (): JSX.Element => {
  const list: Array<RandomUser> = users.users;
  // Devo trocar por uma funçao que recebe um parâmetro de página! Para poder passar para o fetchUsers no backend

  return (
    <>
      <div id='random-user-page-wrapper'>
        <div id='random-user-title-search-wrapper'>
          <Title title={"random users"} />
          <SearchBar />
        </div>
        <UserList list={list} />
        <PageSelector />
      </div>
    </>
  );
};

const PageSelector = (props: any): JSX.Element => {
  return <div id='random-user-page-selector'>P A G E \ S E L E C T O R</div>;
};

export default RandomUserPage;
