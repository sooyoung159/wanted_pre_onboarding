import Card from "./UI/Card";
import classes from "./Modal.module.css";
import Button from "./UI/Button";
import ModalUI from "./UI/ModalUI";
import { useState } from "react";

const Modal = () => {
  const [modal, setModal] = useState(false);

  const modalHandler = () => {
    setModal(true);
  };

  const onConfirm = () => {
    setModal(false);
  };
  return (
    <Card className={classes.common}>
      <header className={classes.header}>
        <h2 className={classes.h2}>Modal</h2>
      </header>
      <div className={classes.content}>
        <Button onClick={modalHandler}>Click me!</Button>
      </div>
      {modal && <ModalUI onConfirm={onConfirm} />}
    </Card>
  );
};

export default Modal;
