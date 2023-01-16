import "../App.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { SharenergyLogo, TheTesteDanielCavalcanteLogo } from "./Logos/Logos";

import { FC } from "react";

function Layout() {
  // const [selected, setSelected] = ..?
  return (
    <>
      <header>
        <div>
          <ul>
            <li>
              <Link to='/home'>home</Link>
            </li>
            <li>
              <Link to='/dog'>dogs</Link>
            </li>
            <li>
              <a
                href='https://www.sharenergy.com.br/'
                target='_blank'
                rel='noreferrer'
              >
                <SharenergyLogo id='sharenergy-logo-nav-menu' />
              </a>
            </li>
            <li>
              <Link to='/cat'>cats</Link>
            </li>
            <li>
              <Link to='/clients'>clients</Link>
            </li>
          </ul>
        </div>
      </header>

      <main>
        <RequireAuth>
          <Outlet />
        </RequireAuth>
      </main>

      <footer>
        <TheTesteDanielCavalcanteLogo id='footer-teste-logo' />
      </footer>
    </>
  );
}

const RequireAuth: FC<{ children: React.ReactElement }> = ({ children }) => {
  const navigate = useNavigate();
  const userIsLogged = sessionStorage.getItem("accessToken") && true; // Your hook to get login status

  if (!userIsLogged) {
    navigate("/notLogged");
  }
  return children;
};

export default Layout;
