import React from 'react';
import './style.css';
import Chuck from './components/Chuck';
import { useState, useEffect } from 'react';
import Modal from './modals/Modal';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [currCategory, setCurrCategory] = useState('');
  const [joke, setJoke] = useState('');

  const changeIsOpen = () => {
    setIsOpen(false);
  };

  const fetchCategories = async () => {
    const res = await fetch('https://api.chucknorris.io/jokes/categories');
    const data = await res.json();
    setCategories(data);
  };

  const generateRandomJoke = async (category) => {
    const res = await fetch(
      `https://api.chucknorris.io/jokes/random?category=${category}`
    );
    const data = await res.json();
    setJoke(data.value);
    setCurrCategory(category);
    setIsOpen(true);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div>
      <Chuck categories={categories} generateRandomJoke={generateRandomJoke} />
      {isOpen && (
        <Modal
          currCategory={currCategory}
          generateRandomJoke={generateRandomJoke}
          changeIsOpen={changeIsOpen}
          data={joke}
        />
      )}
    </div>
  );
}
