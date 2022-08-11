import React from "react";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem";
import Card from "../UI/Card";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Jellof rice",
    description: "Orange and spicy rice",
    price: 2200,
  },
  {
    id: "m2",
    name: "Fried rice",
    description: "Well spiced delicious rice ",
    price: 1600,
  },
  {
    id: "m3",
    name: "Beans",
    description: "Plant protein at it's best",
    price: 1300,
  },
  {
    id: "m4",
    name: "Yam & Egg",
    description: "Good cabohydrate",
    price: 1800,
  },
  {
    id: "m5",
    name: "Indomie",
    description: "Sweet sweet noodles",
    price: 2800,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id = {meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
