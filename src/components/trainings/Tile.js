import "../../styles/Tile.css";
import ReactApexChart from "react-apexcharts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const options = {
  chart: {
    height: 120,
    type: "radialBar",
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: "60%",
      },
      dataLabels: {
        name: {
          show: false,
        },
        value: {
          offsetY: 4,
        },
      },
    },
  },
};

function TrainingTile(props) {
  return (
    <div
      className={`tile col ${
        props.training.isPending ? "pending" : "completed"
      }`}
    >
      <div className="card">
        <div
          className="card-image"
          style={{
            backgroundImage: `url(${
              require(`../../img/${props.training.imageFile}`).default
            })`,
          }}
        >
          <div className="tile-bakckdrop"></div>
          <div className="tile-play">
            <FontAwesomeIcon icon={faPlay} />
          </div>
          <div className="tile-mandatory">MANDATORY</div>
        </div>
        <div className="card-body">
          <div className="card-title">{props.training.title}</div>
          <div className="tile-content">
            <div className="tile-time row">
              <div className="tile-duration col">
                DUTATION
                <div>{props.training.duration} mins</div>
              </div>
              <div className="tile-due-date col">
                DUE DATE
                <div className="tile-date">{props.training.dueDate}</div>
              </div>
            </div>
            <ReactApexChart
              options={options}
              series={[props.training.percentage]}
              type="radialBar"
              height={120}
            />

            <button
              className={
                props.training.isPending
                  ? "btn btn-secondary disabled"
                  : "btn btn-success"
              }
            >
              Download Certificate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrainingTile;
