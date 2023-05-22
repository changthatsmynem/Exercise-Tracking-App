import { useState } from "react";

//component
import MainNav from "../../shared/components/Navbar/MainNav";
import WALK from "../../assets/images/walk_480.png";
import RUN from "../../assets/images/running_480.png";
import BICYCLE from "../../assets/images/bicycle_480.png";
import HIKE from "../../assets/images/hiking_480.png";
import SWIM from "../../assets/images/swimming_480.png";

//style
import "./EditAct.css";

function EditActivityCard() {
  const [SelectedActivity, setSelectedActivity] = useState(null);

  function onSelectedActivity(activity) {
    setSelectedActivity(activity);
  }

  return (
    <div>
      <MainNav />
      <div className="EditBackground">
        {/* <HeaderActivityCard /> */}
        <ActivitiesChoice />
        <ActivityInput />
      </div>
    </div>
  );
}

// function HeaderActivityCard() {
//   return (
//     <div className="Header">
//       <h1 className="AddAct">Edit Activity</h1>
//       <p className="ActType">Activity Type</p>
//     </div>
//   );
// }

function ActivitiesChoice() {
  return (
    <div>
      <div className="Icon-activitycard">
        <img
          onClick={() => onSelectedActivity}
          src={WALK}
          alt="Walking"
        />

        <img
          onClick={() => onSelectedActivity}
          src={RUN}
          alt="Running"
        />

        <img
          onClick={() => onSelectedActivity}
          src={HIKE}
          alt="Hiking"
        />

        <img
          onClick={() => onSelectedActivity}
          src={BICYCLE}
          alt="Cycling"
        />

        <img
          onClick={() => onSelectedActivity}
          src={SWIM}
          alt="Swimming"
        />
      </div>
    </div>
  );
}

function ActivityInput() {
  return (
    <div>
      <div className="ActivityInput-ParentGroup">
        <div className="ActivityInput-group1">
          <label className="gapact">Activity Name</label>
          <input id="actinput0" type="text" placeholder="activity name" />
          <div className="gc1">
            <label className="gaptime">Start Time</label>
            <input id="actinput" type="text" placeholder="start time" />
          </div>
          <br />
          <div className="gc2">
            <label className="gaptime">End Time</label> &nbsp;
            <input id="actinput" type="text" placeholder="end time" />
          </div>
          <br />
          {/* เหลือใส่โค้ดให้เซฟรูปได้คิดยังไม่ออก */}
        </div>
        <div className="ActivityInput-group2">
          <label id="Label-Activity-Detail" className="gapact">
            Activity Detail
          </label>
          <input id="actinput1" type="text" placeholder="activity detail" />
          <input type="datetime-local" placeholder="Date" />
        </div>
      </div>
      <div className="ActivityInput-group3">
        <input
          id="distance"
          type="text"
          placeholder="Distance                                                                                                   KM"
        />
        {/* <button id="submit"> Submit </button> */}
      </div>
    </div>
  );
}

export default EditActivityCard;
