/**
 * see recipesReducer for reson behind refactoring
 */

/*
const initialState = {
  ingredients: [{
    recipe: 'omelette',
    name: 'egg',
    quantity: 2
  }]
}

export const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_INGREDIENT':
      return {
        ...state,
        ingredients: state.ingredients.concat({
          recipe: action.recipe,
          name: action.name,
          quantity: action.quantity
        })
      }
    default:
      return state
  }
}
*/
import { ADD_INGREDIENT } from '../constants/actionTypes'

const initialState = [{
  recipe: 'omelette',
  name: 'egg',
  quantity: 2
}]

export const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT:
      return state.concat({
        recipe: action.recipe,
        name: action.name,
        quantity: action.quantity
      })

    default:
      return state
  }
}