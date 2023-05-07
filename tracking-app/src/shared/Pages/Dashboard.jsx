import { useState } from "react";

//component
import MainNav from "../components/Navbar/MainNav";
import ActivityList from "../components/UIElements/ActivityList";
import Button from "../components/UIElements/Button";
import Background from "../components/UIElements/Background";
import ProfileElements from "../components/UIElements/ProfileElements";

//style
import "./Dashboard.css";

//icons
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import HikingIcon from "@mui/icons-material/Hiking";
import PoolIcon from "@mui/icons-material/Pool";

const DUMMY = [
  {
    id: 1,
    header: "Walk",
    activity: <DirectionsWalkIcon />,
    descriptions: "Test test test test",
    startTime: "10:00",
    endTime: "18:00",
  },
  {
    id: 2,
    header: "Run",
    activity: <DirectionsRunIcon />,
    descriptions: "Test test test test",
    startTime: "10:00",
    endTime: "18:00",
  },
  {
    id: 3,
    header: "Bicycle",
    activity: <DirectionsBikeIcon />,
    descriptions: "Test test test test",
    startTime: "10:00",
    endTime: "18:00",
  },
  {
    id: 4,
    header: "Hiking",
    activity: <HikingIcon />,
    descriptions: "Test test test test",
    startTime: "10:00",
    endTime: "18:00",
  },
  {
    id: 5,
    header: "Swimming",
    activity: <PoolIcon />,
    descriptions: "Test test test test",
    startTime: "10:00",
    endTime: "18:00",
  },
];

const Dashboard = (props) => {
  const [activities, setActivities] = useState([]);
  return (
    <>
      <MainNav />
      <Background>
        <div className="db-pages">
          <div className="left-dashb-container">
            <ProfileElements />
          </div>
          <div className="right-dashb-container">
            <div className="header-right-section-dashb">
              <div className="dash-word-header">
                <h1>Your Dashboard</h1>
              </div>
              <Button size="medium" to="/addActivity" className="add-btn-dashb">
                Add Activity
              </Button>
            </div>
            <ActivityList items={DUMMY} />
          </div>
        </div>
      </Background>
    </>
  );
};

export default Dashboard;
