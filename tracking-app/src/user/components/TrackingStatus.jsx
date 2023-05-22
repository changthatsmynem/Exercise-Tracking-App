import { useEffect } from "react";

const TrackingStatus = (props) => {
  return (
    <div className="tracking-activity-status">
      <div className="total-activity">
        <p>Total Activity</p>
        <span>{props.totalActivity}</span>
      </div>
      <div className="ongoing-activity">
        <p>In Progress</p>
        <span>{props.ongoingActivity}</span>
      </div>
      <div className="complete-activity">
        <p>Completed Activity</p>
        <span>{props.completeActivity}</span>
      </div>
      <div className="incomplete-activity">
        <p>Incomplete Activity</p>
        <span>{props.incompleteActivity}</span>
      </div>
    </div>
  );
};

export default TrackingStatus;
