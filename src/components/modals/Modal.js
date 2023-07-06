import React from 'react';
import { useState } from 'react';

const Modal = ({ open, children }) => {
  if (!open) return false;
  return <div>
    <button onClick = {}>close</button>
    {children}
  </div>;
};

export default Modal;
