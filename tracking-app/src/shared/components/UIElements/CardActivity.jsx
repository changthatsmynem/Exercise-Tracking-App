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
    <Layout className={`activity-card__layout`}>
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
      <p className="activity-description-box">Description</p>
      <div className="card-activity-btn">
        <Button size="small">Finish</Button>
        <Button danger size="small">
          End
        </Button>
      </div>
      <ModeRoundedIcon />
      <DeleteForeverRoundedIcon />
    </Layout>
  );
};

export default CardActivity;
