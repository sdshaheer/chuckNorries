import React from 'react';
import './style.css';
import Chuck from './components/Chuck';
import { useState, useEffect } from 'react';
import Modal from './modals/Modal';

export default function App() {
  const [isopen, setIsOpen] = useState(true);

  const changeIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Modal open={isopen} changeIsOpen={changeIsOpen}>
      hello
    </Modal>
  );
}
