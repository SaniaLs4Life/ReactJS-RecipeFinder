import {combineReducers } from 'redux'
import { SET_RECIPES, FAVORITE_RECIPE } from '../actions'

function recipes(states = [], action){
    switch(action.type){
        case SET_RECIPES:
            return action.items
        default:
            return states
    }
}
function favoriteRecipe(state = [], action){
    switch(action.type){
        case FAVORITE_RECIPE:
            state = [...state, action.recipe]
        default:
            return state
    }
}

const rootReducers = combineReducers({recipes, favoriteRecipe})

export default rootReducers