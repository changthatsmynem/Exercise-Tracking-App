import { useState } from "react";

//component
import MainNav from "../../../shared/components/Navbar/MainNav";
import ActivityList from "../../../activity/components/ActivityList";
import Button from "../../../shared/components/UIElements/Button";
import Background from "../../../shared/components/UIElements/Background";
import ProfileElements from "../../components/ProfileElements";

//style
import "./Dashboard.css";

//icons
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import HikingIcon from "@mui/icons-material/Hiking";
import PoolIcon from "@mui/icons-material/Pool";

// const DUMMY = []
const DUMMY = [
  {
    id: 1,
    header: "Walk",
    activity: <DirectionsWalkIcon />,
    descriptions: "Test test test test",
    startTime: "10:00",
    endTime: "18:00",
    duration: 300,
  },
  {
    id: 2,
    header: "Run",
    activity: <DirectionsRunIcon />,
    descriptions: "Test test test test",
    startTime: "10:00",
    endTime: "18:00",
    duration: 300,
  },
  {
    id: 3,
    header: "Bicycle",
    activity: <DirectionsBikeIcon />,
    descriptions: "Test test test test",
    startTime: "10:00",
    endTime: "18:00",
    duration: 300,
  },
  {
    id: 4,
    header: "Hiking",
    activity: <HikingIcon />,
    descriptions: "Test test test test",
    startTime: "10:00",
    endTime: "18:00",
    duration: 300,
  },
  {
    id: 5,
    header: "Swimming",
    activity: <PoolIcon />,
    descriptions: "Test test test test",
    startTime: "10:00",
    endTime: "18:00",
    duration: 300,
  },
  {
    id: 5,
    header: "Swimming",
    activity: <PoolIcon />,
    descriptions: "Test test test test",
    startTime: "10:00",
    endTime: "18:00",
    duration: 300,
  },
  {
    id: 5,
    header: "Swimming",
    activity: <PoolIcon />,
    descriptions: "Test test test test",
    startTime: "10:00",
    endTime: "18:00",
    duration: 300,
  },
  {
    id: 5,
    header: "Swimming",
    activity: <PoolIcon />,
    descriptions: "Test test test test",
    startTime: "10:00",
    endTime: "18:00",
    duration: 300,
  },
  {
    id: 5,
    header: "Swimming",
    activity: <PoolIcon />,
    descriptions: "Test test test test",
    startTime: "10:00",
    endTime: "18:00",
    duration: 300,
  },
  {
    id: 5,
    header: "Swimming",
    activity: <PoolIcon />,
    descriptions: "Test test test test",
    startTime: "10:00",
    endTime: "18:00",
    duration: 300,
  },
  {
    id: 5,
    header: "Swimming",
    activity: <PoolIcon />,
    descriptions: "Test test test test",
    startTime: "10:00",
    endTime: "18:00",
    duration: 300,
  },
];

const PROFILE = {
  name: "George Smith W. Bush",
  age: 25,
  height: 170,
  weight: 65,
};

const Dashboard = (props) => {
  const [activities, setActivities] = useState([]);
  return (
    <>
      <MainNav />
      <Background className="db-background">
        <div className="db-pages">
          <Button to={"/add"} size="medium" className="add-btn-dashb">
            <span className="plus-response">+</span>
            <span className="add-activity-text">Add Activity</span>
          </Button>
          <div className="left-dashb-container">
            <ProfileElements profile={PROFILE} />
          </div>
          <div className="right-dashb-container">
            <div className="header-right-section">
              <h1>Your Dashboard</h1>
            </div>
            <ActivityList items={DUMMY} />
          </div>
        </div>
      </Background>
    </>
  );
};

export default Dashboard;
