import React from 'react';
// import { withRouter } from 'react-router-dom';

import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

// This acts as a wrapper around all of the burger ingredients.
const burger = (props) => {
  // Map the ingredients object into an array of ingredients.
  // Each array element will contain the ingredient type plus the quantity (e.g. Salad - 2).
  // igKey is the ingredient type.
  let transformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      }); // array with 2 elements
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []); // flatten the array if props.ingredients is 0.

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;

// You can pass props from the top level component down
// using withRouter.
// export default withRouter(burger);
