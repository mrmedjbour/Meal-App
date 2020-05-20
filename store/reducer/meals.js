import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVORITE, SET_FILTERS } from '../actions/meals';

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: [],
};

const mealsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITE:
            // get the index of fav mail if is fav else -1
            const existingIndex = state.favoriteMeals.findIndex(meal => meal.id === action.mealId);
            if (existingIndex >= 0){
                const updatedFavoriteMeals = [...state.favoriteMeals];
                updatedFavoriteMeals.splice(existingIndex, 1);
                return { ...state, favoriteMeals: updatedFavoriteMeals };
            } else {
                const addFavMeal = state.favoriteMeals.concat(state.meals.find(meal => meal.id === action.mealId));
                return {...state, favoriteMeals: addFavMeal };
            }
        case SET_FILTERS:
            const Filters = action.filters;
            const updatedFilteredMeals = state.meals.filter(meal => {
                if (Filters.isGlutenFree && !meal.isGlutenFree){
                    return false;
                }
                if (Filters.isLactoseFree && !meal.isLactoseFree){
                    return false;
                }
                if (Filters.isVegan && !meal.isVegan){
                    return false;
                }
                if (Filters.isVegetarian && !meal.isVegetarian){
                    return false;
                }
                return true;
            });
            return {...state, filteredMeals: updatedFilteredMeals};
        default:
            return state;
    }
};

export default mealsReducer;