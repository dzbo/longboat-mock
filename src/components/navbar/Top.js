import logo from "../../img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle, faUsers } from "@fortawesome/free-solid-svg-icons";

function NavbarTop() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-top">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={logo} className="logo me-3" alt="Longboat" />
          Navigate
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item me-1">
              <a className="nav-link" aria-current="page" href="/">
                <FontAwesomeIcon
                  icon={faQuestionCircle}
                  className="me-1 nav-icon"
                />
                Help
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/">
                <FontAwesomeIcon icon={faUsers} className="me-1 nav-icon" />
                Contacts
              </a>
            </li>
            <li className="nav-item nav-spacer ms-3"></li>
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Bob Cole
              </span>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <span className="dropdown-item disabled">
                    bob.cole@longboat.com
                  </span>
                </li>
                <li>
                  <a className="dropdown-item" href="#!">
                    Settings
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#!">
                    Logout
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarTop;
