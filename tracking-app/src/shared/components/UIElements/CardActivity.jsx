import Layout from "./Layout";

const CardActivity = (props) => {
  return (
    <Layout className={`activity-card__layout`}>
      <h3>{props.header}</h3>
      <div>
        {props.activityType}
      </div>
      <p>{props.description}</p>
      
    </Layout>
  );
};

export default CardActivity;
