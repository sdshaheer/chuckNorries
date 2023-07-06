import React from 'react';
import { useState } from 'react';
import ReactDom from 'react-dom';
import classes from './modal.module.css';
import { RxCross2 } from 'react-icons/rx';

const Modal = ({ open, changeIsOpen, children }) => {
  if (!open) return null;

  const handleModal = () => {
    changeIsOpen();
  };

  return ReactDom.createPortal(
    <div className={classes.overlay}>
      <div className={classes.container}>
        <div className={classes.modal}>
          <div className={classes.icon}>
            <span className={classes.title}>Tiltle</span>
            <RxCross2 className={classes.reactIcon} onClick={handleModal} />
          </div>
          <div className={classes.content}>
            <span className={classes.children}>{children}</span>
            <button>Next</button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('portal')
  );
};

export default Modal;
