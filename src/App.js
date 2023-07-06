import React from 'react';
import './style.css';
import Chuck from './components/Chuck';
import { useState, useEffect } from 'react';
import Modal from './modals/Modal';

export default function App() {
  const [isopen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [joke, setJoke] = useState('');

  const changeIsOpen = () => {
    setIsOpen(false);
  };

  const fetchCategories = async () => {
    const res = await fetch('https://api.chucknorris.io/jokes/categories');
    const data = await res.json();
    setCategories(data);
    setJoke(data.value);
    setIsOpen(true);
  };

  const generateRandomJoke = async (category) => {
    const res = await fetch(
      `https://api.chucknorris.io/jokes/random?category=animal`
    );
    const data = await res.json();
    console.log(data);
    console.log('.........');
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  console.log(categories);

  return (
    <div>
      <Chuck categories={categories} generateRandomJoke={generateRandomJoke} />
      <Modal open={isopen} changeIsOpen={changeIsOpen}>
        <h1>hello</h1>
      </Modal>
    </div>
  );
}
