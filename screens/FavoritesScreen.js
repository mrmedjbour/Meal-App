import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

import {CATEGORIES , MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import MealList from "../components/MealList";

const FavoritesScreen = props => {

    const FavoritesMeals = MEALS.filter(
        meal => meal.id === "m1" || meal.id === "m2"
    );

    return (
        <MealList listData={FavoritesMeals} navigation={props.navigation} />
    );
};

export default FavoritesScreen;