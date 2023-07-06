import React from 'react';
import Chuck from './components/Chuck';
import classes from './chuck.module.css';
import { capitalize } from './functions';
const Chuck = ({ categories, generateRandomJoke }) => {
  const getJoke = (category) => {
    console.log('clicked');
    generateRandomJoke(category);
  };
  return (
    <div className={classes.container}>
      <h1 className={classes.heading}>Chuck Norries</h1>
      <div className={classes.grid}>
        {categories.map((category, index) => {
          return (
            <div
              className={classes.category}
              key={index}
              onClick={() => getJoke(category)}
            >
              <span className={classes.categoryText}>
                {capitalize(category)}
              </span>
              <span className={classes.categoryDescription}>
                Unlimited Jokes On {capitalize(category)}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Chuck;
