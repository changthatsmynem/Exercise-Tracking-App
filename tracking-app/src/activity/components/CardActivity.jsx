import { useState, useEffect } from "react";
import ModeRoundedIcon from "@mui/icons-material/ModeRounded";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

//components
import EditActivityCard from "../pages/EditAct";
import Layout from "../../shared/components/UIElements/Layout";
import Button from "../../shared/components/UIElements/Button";
import Modal from "../../shared/components/UIElements/Modal";

//style
import "./CardActivity.css";

const CardActivity = (props) => {
  const [layout, setLayout] = useState("default");
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [completed, setCompleted] = useState(null);

  const layoutSuccessHandler = () => {
    if (layout === "default") {
      setLayout("success");
    }
  };

  const layoutCancelHandler = () => {
    if (layout === "default") {
      setLayout("cancel");
    }
  };

  //Edit modal handler
  const openEditHandler = () => setShowEditModal(true);
  const closeEditHandler = () => setShowEditModal(false);

  //Delete modal handler
  const showDeleteHandler = () => setShowDeleteModal(true);
  const cancelDeleteHandler = () => setShowDeleteModal(false);
  const confirmDeleteHandler = () => setShowDeleteModal(false);

  return (
    <>
      <Modal
        show={showEditModal}
        onCancel={closeEditHandler}
        header={"Edit Activity"}
        contentClass="edit-activity__modal-content"
        footerClass="edit-activity__modal-actions"
        footer={<Button>SAVE</Button>}
      >
        <EditActivityCard />
      </Modal>
      <Layout default={layout} className="card-activity-layout">
        <div className="activity-header">
          <h3 className="activity-card__header">{props.header}</h3>
          <div className="activity-type__card">{props.activity}</div>
        </div>
        <div className="date-input__card">
          <p>
            <b>Start Date:</b> {props.startDate}
          </p>
          <p>
            <b>End Date:</b> {props.endDate}
          </p>
        </div>
        <div className="activity-duration">
          <div className="time-icon-activity">
            <AccessTimeIcon></AccessTimeIcon>
          </div>
          <p className="duration-display">{props.duration}</p>
        </div>
        <div className="activity-description-box">
          <p>{props.descriptions}</p>
        </div>
        <div className="card-activity-btn">
          {layout === "default" && (
            <>
              <Button
                size="small"
                className="finish-btn-card-activity"
                onClick={layoutSuccessHandler}
              >
                Finish
              </Button>
              <Button
                danger
                size="small"
                className="stop-btn-card-activity"
                onClick={layoutCancelHandler}
              >
                Cancel
              </Button>
            </>
          )}
        </div>
        <div className="control-card-activity-btn">
          <button className="edit-btn-card-act" onClick={openEditHandler}>
            <ModeRoundedIcon className="edit-icon-card-act" />
          </button>
          <button className="rm-btn-card-act" onClick={showDeleteHandler}>
            <DeleteForeverRoundedIcon className="rm-icon-card-act" />
          </button>
        </div>
      </Layout>
    </>
  );
};

export default CardActivity;
