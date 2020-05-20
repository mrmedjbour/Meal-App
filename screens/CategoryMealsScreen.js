import React from 'react';
import { useSelector } from 'react-redux';

import {CATEGORIES } from "../data/dummy-data";
import MealList from "../components/MealList";

const CategoryMealsScreen = props => {
    const catId = props.navigation.getParam('catId');

    const availableMeals = useSelector(state => state.meals.filteredMeals);

    const displayedMeals = availableMeals.filter(
        meal => meal.categoryIds.indexOf(catId) >= 0
    );

    return (
        <MealList listData={displayedMeals} navigation={props.navigation} />
    );
};

CategoryMealsScreen.navigationOptions = navigationData => {
    const cat = CATEGORIES.find(cat => cat.id === navigationData.navigation.getParam('catId'))
    return {
        headerTitle: cat.title,
    };
};

export default CategoryMealsScreen;