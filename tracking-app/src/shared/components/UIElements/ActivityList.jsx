//component
import CardActivity from "./CardActivity";

//style
import "./ActivityList.css";

const ActivityList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="activity-list__box">
        <p>
          <h2>
            Add your activity. And make a list of handful proactive exercise
            card
          </h2>
        </p>
      </div>
    );
  }

  return (
    <div className="activity-list__box">
      <ul className="activity-list-item">
        {props.items.map((item) => (
          <CardActivity
            key={item.id}
            id={item.id}
            header={item.header}
            activity={item.activity}
            descriptions={item.descriptions}
            startTime={item.startTime}
            endTime={item.endTime}
          />
        ))}
      </ul>
    </div>
  );
};

export default ActivityList;
