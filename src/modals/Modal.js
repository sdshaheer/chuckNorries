import React from 'react';
import ReactDom from 'react-dom';
import classes from './modal.module.css';
import { RxCross2 } from 'react-icons/rx';
import { capitalize } from '../components/functions';

const Modal = ({ currCategory, generateRandomJoke, changeIsOpen, data }) => {
  const handleModal = () => {
    changeIsOpen();
  };

  const getNextJoke = () => {
    generateRandomJoke(currCategory);
  };

  return ReactDom.createPortal(
    <div className={classes.overlay}>
      <div className={classes.container}>
        <div className={classes.modal}>
          <div className={classes.icon}>
            <span className={classes.title}>{capitalize(currCategory)}</span>
            <RxCross2
              style={{ color: 'white' }}
              className={classes.reactIcon}
              onClick={handleModal}
            />
          </div>
          <div className={classes.content}>
            <span className={classes.children}>{data}</span>
            <button onClick={getNextJoke}>Next</button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('portal')
  );
};

export default Modal;
