import * as actionTypes from './actions';

const initialState = {
  ingredients: {
    salad: 0,
    bacon: 0,
    meat: 0,
    cheese: 0,
  },
  totalPrice: 4,
};

const reducer = (state = initialState, action) => {
  switch (action.Type) {
    case actionTypes.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          // Get the number of the old ingredients then add 1 and
          // assign it to the current ingredient.
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
        },
      };
    case actionTypes.REMOVE_INGREDIENT:
      return {};
    default:
      return state;
  }
};

export default reducer;
