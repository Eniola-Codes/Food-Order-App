import React from 'react';
import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Foods at Sweet rates</h2>
      <p>
            Choose from a variety of delicious meals, get balanced diet amazing deicacies from our list of meals
            Order for any meal of your choice and get it to your doorsteps in a couple of minutes. No hidden fees, no hassle.
      </p>
    </section>
  );
};

export default MealsSummary;