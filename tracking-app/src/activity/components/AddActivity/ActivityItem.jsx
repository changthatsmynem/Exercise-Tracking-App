import { useState } from "react";

//icons for each exercise
import WALK from "../../../assets/images/walk_480.png";
import SWIM from "../../../assets/images/swimming_480.png";
import HIKING from "../../../assets/images/hiking_480.png";
import BIKE from "../../../assets/images/bicycle_480.png";

//style
import "./ActivityItem.css";

const ActivityItem = () => {
  const [selectedIcon, setSelectedIcon] = useState("");

  const handleIconSelect = (icon) => {
    setSelectedIcon(icon);
  };

  return (
    <div className="regist-container">
      <h1>Add Activity</h1>
      <h2>Select an Activity</h2>
      <div className="icon-list">
        <div className="icon-selector-container">
          <img
            src={WALK}
            alt="walk"
            onClick={() => handleIconSelect("walk")}
            style={{
              width: "100px",
              height: "100px",
              border: selectedIcon === "walk" ? "2px solid blue" : "none",
            }}
          />
          <img
            src={RUN}
            alt="run"
            onClick={() => handleIconSelect("run")}
            style={{
              width: "100px",
              height: "100px",
              border: selectedIcon === "run" ? "2px solid blue" : "none",
            }}
          />
          <img
            src={SWIM}
            alt="swim"
            onClick={() => handleIconSelect("swim")}
            style={{
              width: "100px",
              height: "100px",
              border: selectedIcon === "swim" ? "2px solid blue" : "none",
            }}
          />
          <img
            src={BIKE}
            alt="bike"
            onClick={() => handleIconSelect("bike")}
            style={{
              width: "100px",
              height: "100px",
              border: selectedIcon === "bike" ? "2px solid blue" : "none",
            }}
          />
          <img
            src={HIKING}
            alt="hike"
            onClick={() => handleIconSelect("hike")}
            style={{
              width: "100px",
              height: "100px",
              border: selectedIcon === "hike" ? "2px solid blue" : "none",
            }}
          />
        </div>
      </div>
      <h3>You have selected: {selectedIcon}</h3>
    </div>
  );
};

export default ActivityItem;
