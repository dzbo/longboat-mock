import "../styles/Training.css";
import TrainingTab from "../components/tabs/Training";
import TrainingTile from "../components/trainings/Tile";

const trainings = [
  {
    title: "Navigate Protocol Essential",
    imageFile: "tile1.png",
    duration: 25,
    dueDate: "26 Sep 2019",
    percentage: 16,
    isPending: true,
  },
  {
    title: "Dazoxumab Disease & Drug Overview",
    imageFile: "tile2.png",
    duration: 5,
    dueDate: "26 Sep 2019",
    percentage: 100,
    isPending: false,
  },
  {
    title: "ICH GCP Essentials",
    imageFile: "tile3.png",
    duration: 30,
    dueDate: "23 Oct 2019",
    percentage: 100,
    isPending: false,
  },
  {
    title: "RECIST 1.1",
    imageFile: "tile4.png",
    duration: 12,
    dueDate: "23 Oct 2019",
    percentage: 100,
    isPending: false,
  },
];

function TrainingPage() {
  return (
    <>
      <TrainingTab />
      <div className="container pt-3">
        <div className="row">
          {trainings.map(function (training, i) {
            return <TrainingTile training={training} key={i} />;
          })}
        </div>
      </div>
    </>
  );
}

export default TrainingPage;
