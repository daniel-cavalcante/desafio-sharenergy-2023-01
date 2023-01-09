import "../App.css";
import { Link, Outlet } from "react-router-dom";
import { SharenergyLogo, TheTesteDanielCavalcanteLogo } from "./Logos/Logos";

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
              <a href='https://www.sharenergy.com.br/' target='_blank'>
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
        <Outlet />
      </main>

      <footer>
        <TheTesteDanielCavalcanteLogo id='footer-teste-logo' />
      </footer>
    </>
  );
}

export default Layout;
