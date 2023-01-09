import { useState } from "react";
import { Link } from "react-router-dom";
import { TheTesteDanielCavalcanteLogo, SharenergyLogo } from "../Logos/Logos";

const LoginPage = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dosomething = () => {};

  function handleUsernameChange(e: React.FormEvent) {
    setUsername((e.target as HTMLTextAreaElement).value);
  }

  function handlePasswordChange(e: React.FormEvent) {
    setPassword((e.target as HTMLTextAreaElement).value);
  }

  function handleLogIn(e: React.FormEvent) {
    e.preventDefault();
    // DO SOMETHING HERE...
    console.log(username, password);
    setUsername("");
  }
  return (
    <div id='login-wrapper'>
      <TheTesteDanielCavalcanteLogo id='login-teste-logo' />
      <form onSubmit={dosomething}>
        <input
          type='text'
          id='login-username-input'
          className='input'
          name='keywords'
          value={username}
          // autoComplete='off'
          placeholder='Username'
          onChange={handleUsernameChange}
        ></input>
        <input
          type='password'
          id='login-password-input'
          className='input'
          name='keywords'
          value={password}
          // autoComplete='off'
          placeholder='Password'
          onChange={handlePasswordChange}
        ></input>
        <Link to='/home'>
          <button id='login-button' className='button' onClick={handleLogIn}>
            log in
          </button>
        </Link>
        <div>
          <input
            id='remember-checkbox'
            type='checkbox'
            onClick={() => {}}
          ></input>
          <label htmlFor='remember-checkbox'>remember me</label>
        </div>
      </form>
      <span id='sharenergy-logo-container'>
        <a href='https://www.sharenergy.com.br/' target='_blank'>
          <SharenergyLogo id='sharenergy-logo-login-page' />
        </a>
      </span>
    </div>
  );
};

export default LoginPage;
