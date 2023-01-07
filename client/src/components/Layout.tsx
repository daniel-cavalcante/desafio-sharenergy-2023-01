import "../App.css";
import { Link, Outlet } from "react-router-dom";
import Logo from "./Logo";

function Layout() {
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
              <Logo />
            </li>
            <li>
              <Link to='/cat'>cats</Link>
            </li>
            <li>
              <Link to='/client'>clients</Link>
            </li>
          </ul>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>F O O T E R</footer>
    </>
  );
}

export default Layout;
