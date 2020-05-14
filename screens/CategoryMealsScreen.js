import React from 'react';

import {CATEGORIES , MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";

const CategoryMealsScreen = props => {
    const catId = props.navigation.getParam('catId');
    const cat = CATEGORIES.find(cat => cat.id === catId)
    const displayedMeals = MEALS.filter(
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