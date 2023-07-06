import React from 'react';
import './style.css';
import Chuck from './components/Chuck';
import { useState, useEffect } from 'react';
import Modal from './components/modals/Modal';

export default function App() {
  const [isopen, setIssOpen] = useState(false);
  return (
    <Modal open={isopen}>
      <Chuck />
    </Modal>
  );
}
