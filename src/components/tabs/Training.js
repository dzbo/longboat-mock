import "../../styles/Tabs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faCertificate,
} from "@fortawesome/free-solid-svg-icons";

function TrainingTab() {
  return (
    <>
      <div className="training-tab">
        <div className="container">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link active" href="#!">
                <FontAwesomeIcon
                  icon={faGraduationCap}
                  className="me-2 tab-icon"
                />
                MY TRAINING
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">
                <FontAwesomeIcon
                  icon={faCertificate}
                  className="me-2 tab-icon icon-small"
                />
                MY CERTIFICATES
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="tab-header">
        <div className="container d-flex">
          <ol className="breadcrumb m-0">
            <li className="breadcrumb-item ms-3">
              <FontAwesomeIcon
                icon={faGraduationCap}
                className="me-2 tab-icon"
              />
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              My Training
            </li>
          </ol>
          <div className="tab-progress ms-auto mb-2">
            Total Training Completed
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="79"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                79%
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TrainingTab;
