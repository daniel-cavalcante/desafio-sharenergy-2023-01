import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TheTesteDanielCavalcanteLogo, SharenergyLogo } from "../Logos/Logos";

const LoginPage = () => {
  const localUsername = localStorage.getItem("username");
  const localPassword = localStorage.getItem("password");
  const [username, setUsername] = useState<string>(
    localUsername ? localUsername : ""
  );
  const [password, setPassword] = useState<string>(
    localPassword ? localPassword : ""
  );

  const [rememberme, setRememberme] = useState(false);

  const navigate = useNavigate();

  function handleUsernameChange(e: React.FormEvent) {
    setUsername((e.target as HTMLTextAreaElement).value);
  }

  function handlePasswordChange(e: React.FormEvent) {
    setPassword((e.target as HTMLTextAreaElement).value);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (rememberme && username && password) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
    }
    navigate("/home");
  }
  return (
    <div id='login-wrapper'>
      <TheTesteDanielCavalcanteLogo id='login-teste-logo' />
      <form onSubmit={handleSubmit}>
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
        <button id='login-button' className='button' type='submit'>
          log in
        </button>
        <div>
          <input
            id='remember-checkbox'
            type='checkbox'
            onClick={() => setRememberme(!rememberme)}
          ></input>
          <label htmlFor='remember-checkbox'>remember me</label>
        </div>
      </form>
      <span id='sharenergy-logo-container'>
        <a
          href='https://www.sharenergy.com.br/'
          target='_blank'
          rel='noreferrer'
        >
          <SharenergyLogo id='sharenergy-logo-login-page' />
        </a>
      </span>
    </div>
  );
};

export default LoginPage;
