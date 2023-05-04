import React, { useState } from "react";
import './ActivityItem.css'
import WALK from "./walk_480.png"
import RUN from "./running_480.png"
import SWIM from "./swimming_480.png"
import HIKING from "./hiking_480.png"
import BIKE from "./bicycle_480.png"

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