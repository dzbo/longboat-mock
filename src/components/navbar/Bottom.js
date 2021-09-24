import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faGraduationCap,
  faFolder,
  faUserFriends,
  faComments,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

function NavbarBottom() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-bottom">
      <div className="container">
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link ps-1" href="#!">
              <FontAwesomeIcon icon={faHome} className="me-1 nav-icon" />
              DASHBOARD
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#!">
              <FontAwesomeIcon
                icon={faGraduationCap}
                className="me-1 nav-icon"
              />
              TRAINING
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#!">
              <FontAwesomeIcon icon={faFolder} className="me-1 nav-icon" />
              DOCUMENTS
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#!">
              <FontAwesomeIcon icon={faUserFriends} className="me-1 nav-icon" />
              PATIENTS
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#!">
              <FontAwesomeIcon icon={faComments} className="me-1 nav-icon" />
              FAQ
            </a>
          </li>
        </ul>
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" href="#!">
              <div className="alert-badge">5</div>
              <FontAwesomeIcon icon={faEnvelope} className="me-1 nav-icon" />
              ALERTS
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavbarBottom;
