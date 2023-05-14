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
            Add your activity. And make a list of a handful of proactive
            exercise cards !!
          </h2>
        </p>
      </div>
    );
  }

  return (
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
          duration={item.duration}
        />
      ))}
    </ul>
  );
};

export default ActivityList;