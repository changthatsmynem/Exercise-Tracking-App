import Modal from "./Modal";
import Button from "./Button";

const ErrorModal = (props) => {
  return (
    <Modal
      header={"An Error!!"}
      show={!!props.error}
      footer={<Button onClick={props.onCancel}>Okay</Button>}
    >
      <p>{props.error}</p>
    </Modal>
  );
};

export default ErrorModal;
