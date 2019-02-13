/**
 * combineReducers adds unique key for each reducer, so if the key is "recipes" there
 * having "recipes" again here in initialState will end up have the following in store
 * { 
 *  recipes: {
 *    recipes: [{
 *       name: 'omelette'
 *     }, {
 *     name: 'cheese cake'
 *     }]
 *  },
 *  ...others
 * }
 */

 /*
const initialState = {
  recipes: [{
    name: 'omelette'
  }, {
    name: 'cheese cake'
  }],
}

export const recipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_RECIPE':
      return {
        ...state,
        recipes: state.recipes.concat({
          name: action.name
        })
      }
    default:
      return state
  }
}
*/

import { ADD_RECIPE } from '../constants/actionTypes'

const initialState = [{
  name: 'omelette'
}, {
  name: 'cheese cake'
}]

/* prefix reducer name with property name used in combineReducers as hint of overall location
   in state tree */
export const recipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RECIPE:
    /* this works the same, but concat is faster
     return [...state, {
       name: action.name
     }] */
     return state.concat({name: action.name})

    default:
      return state
  }
}