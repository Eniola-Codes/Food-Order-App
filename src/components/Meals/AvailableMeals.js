import React,{ useEffect, useState } from "react";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem";
import Card from "../UI/Card";


const AvailableMeals = () => {
  const [meals,setMeals] = useState([])
  const [isLoading,setIsLoading] = useState(false);
  const [error,setError] = useState(null);

    useEffect(() => {
        const fetchMoviesHandler = async() =>
        {
          setIsLoading(true);

            const response = await fetch('https://meals-food-d5e28-default-rtdb.firebaseio.com/meals.json');

            if(!response.ok)
            {
              throw new Error('something went wrong');
            }

            const responseData = await response.json();

            const loadedMovies =[];

            for(let key in responseData)
            {
              loadedMovies.push({
                id :key,
                name: responseData[key].name,
                description: responseData[key].description,
                price: responseData[key].price
              });
            }
            setMeals(loadedMovies);
            setIsLoading(false);
        }

       fetchMoviesHandler().catch((error) => {
        setIsLoading(false);
        setError(error.message);
       });

    },[])



    if(error)
    {
      return <p className={classes.error}>{error}</p>
    }

    if(isLoading)
    {
      return <p className={classes.loading}>LOADING...</p>
    }

  
  const mealsList = meals.map((meal) => (
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
