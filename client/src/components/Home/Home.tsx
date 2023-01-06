import React, { useState } from "react";
import users from "../../util/dummy/dummyUser.json";
import { RandomUser } from "../User.types";
import Title from "../Title";
import UserList from "../List";

const Home = (): JSX.Element => {
  const list: Array<RandomUser> = users.users;
  // Devo trocar por uma funçao que recebe um parâmetro de página! Para poder passar para o fetchUsers no backend

  return (
    <>
      <div id='home-wrapper'>
        <Title title={"random users"} />
        <SearchBar />
        <UserList list={list} />
        <PageController />
      </div>
    </>
  );
};

const SearchBar = (): JSX.Element => {
  const [stringInput, setStringInput] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("Not impletemented yet!", stringInput);
  }
  function handleChange(e: React.FormEvent) {
    setStringInput((e.target as HTMLTextAreaElement).value);
  }

  return (
    <div id='search-bar'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          id='string-input'
          name='keywords'
          value={stringInput}
          autoComplete='off'
          placeholder='Enter name, username or e-mail...'
          onChange={handleChange}
        />
        <button className='button' type='submit'>
          search
        </button>
      </form>
    </div>
  );
};

const PageController = (props: any): JSX.Element => {
  return <div id='home-pageController'></div>;
};

export default Home;
