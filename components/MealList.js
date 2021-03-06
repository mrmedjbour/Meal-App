import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import {useSelector} from "react-redux";

import MealItem from './MealItem';

const MealList = props => {
    const favoriteMeals = useSelector(state => state.meals.favoriteMeals);

    const renderMealItem = itemData => {
        return (
            <MealItem onSelectMeal={() => {
                props.navigation.navigate('MealDetail', {
                    mealId: itemData.item.id,
                    mealTitle: itemData.item.title,
                    // check if meal is in fav list
                    isFavorite: favoriteMeals.some(meal => meal.id === itemData.item.id)
                });
            }} meal={itemData.item} />
        );
    };

    return (
        <View style={styles.meallist}>
            <FlatList
                data={props.listData}
                keyExtractor={(item, index) => item.id}
                renderItem={renderMealItem}
                style={{width:'100%'}}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    meallist: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default MealList;