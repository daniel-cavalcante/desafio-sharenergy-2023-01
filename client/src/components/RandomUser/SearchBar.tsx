import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = (): JSX.Element => {
  const navigate = useNavigate();

  const [stringInput, setStringInput] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const keywords: string = stringInput.replace(" ", ",");
    navigate(`/home/search/${keywords}`);
    setStringInput("");
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
            className='input'
            name='keywords'
            value={stringInput}
            autoComplete='off'
            placeholder='Type Name, Username or E-mail'
            onChange={handleChange}
          />
        </div>
        <button className='button' type='submit'>
          search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
