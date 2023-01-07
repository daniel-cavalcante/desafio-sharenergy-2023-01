import { useState } from "react";

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
    <div id='random-user-search-bar'>
      <form onSubmit={handleSubmit}>
        <div id='random-user-label-input-wrapper'>
          <label
            id='random-user-search-label'
            htmlFor='random-user-search-input'
          >
            Looking for a specific person?
          </label>
          <input
            type='text'
            id='random-user-search-input'
            name='keywords'
            value={stringInput}
            autoComplete='off'
            placeholder='Type Name, Username or E-mail'
            onChange={handleChange}
          />
        </div>
        <button id='random-user-search-button' type='submit'>
          search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
