import React from 'react';
import Chuck from './components/Chuck';
import { useState, useEffect } from 'react';
import classes from './chuck.module.css';

const Chuck = () => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    const res = await fetch('https://api.chucknorris.io/jokes/categories');
    const data = await res.json();
    setCategories(data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  console.log(categories);
  return (
    <div className={classes.container}>
      <h1>Chuck Norries</h1>
      {categories.map((category, index) => {
        return (
          <div className={classes.category} key={index}>
            <span className={classes.categoryText}>{category}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Chuck;
