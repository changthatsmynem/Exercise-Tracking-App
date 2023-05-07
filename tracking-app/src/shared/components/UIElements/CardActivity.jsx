import { useEffect } from "react";
import ModeRoundedIcon from "@mui/icons-material/ModeRounded";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";

//components
import Layout from "./Layout";
import Input from "../FormInput/InputForm";
import Button from "./Button";

//style
import "./CardActivity.css";

const CardActivity = (props) => {
  return (
    <Layout default>
      <h3 className="activity-card__header">{props.header}</h3>
      <div className="activity-type__card">{props.activity}</div>
      <div className="time-input__card">
        <p>
          <b>Start:</b> {props.startTime}
        </p>
        <p>
          <b>End:</b> {props.endTime}
        </p>
      </div>
      <div className="activity-description-box">
        <p>{props.descriptions}</p>
      </div>
      <div className="card-activity-btn">
        <Button size="small" className="finish-btn-card-activity">
          Finish
        </Button>
        <Button danger size="small" className="stop-btn-card-activity">
          Stop
        </Button>
      </div>
      <div className="control-card-activity-btn">
        <button className="edit-btn-card-act">
          <ModeRoundedIcon className="edit-icon-card-act" />
        </button>
        <button className="rm-btn-card-act">
          <DeleteForeverRoundedIcon className="rm-icon-card-act" />
        </button>
      </div>
    </Layout>
  );
};

export default CardActivity;
