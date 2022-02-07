import Card from "./UI/Card";
import classes from "./Toggle.module.css";
import Button from "./UI/Button";
import ModalUI from "./UI/ModalUI";
import { useState } from "react";

const Modal = (props) => {
  const [modal, setModal] = useState(false);

  const modalHandler = () => {
    setModal(true);
  };

  const onConfirm = () => {
    setModal(false);
  };
  return (
    <Card className={classes.common}>
      <h1>Modal</h1>
      <Button onClick={modalHandler}>Click me!</Button>
      {modal && <ModalUI onConfirm={onConfirm} />}
    </Card>
  );
};

export default Modal;
