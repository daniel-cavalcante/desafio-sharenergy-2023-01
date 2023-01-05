import "../App.css";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
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

      <footer>links...</footer>
    </>
  );
};

export default Layout;
