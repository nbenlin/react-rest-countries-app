import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { BackdropContainer, ModalContainer, Content } from "./ModalElements";

const Backdrop = (props) => {
  return <BackdropContainer></BackdropContainer>;
};

const ModalOverlay = (props) => {
  return (
    <ModalContainer>
      <Content>{props.children}</Content>
    </ModalContainer>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
