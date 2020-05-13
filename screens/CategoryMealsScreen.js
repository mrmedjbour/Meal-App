import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

import {CATEGORIES , MEALS } from "../data/dummy-data";
import color from "../conf/Color";
import MealItem from "../components/MealItem";

const CategoryMealsScreen = props => {
    const catId = props.navigation.getParam('catId');
    const cat = CATEGORIES.find(cat => cat.id === catId)
    const displayedMeals = MEALS.filter(
        meal => meal.categoryIds.indexOf(catId) >= 0
    );

    const renderMealItem = itemData => {
        return (
            <MealItem onSelectMeal={() => {

            }} meal={itemData.item} />
        );
    };

    console.log(cat);
    return (
        <View style={styles.screen}>
            <FlatList data={displayedMeals} keyExtractor={(item, index) => item.id} renderItem={renderMealItem} style={{width:'100%'}} />
        </View>
    );
};

CategoryMealsScreen.navigationOptions = navigationData => {
    const cat = CATEGORIES.find(cat => cat.id === navigationData.navigation.getParam('catId'))
    return {
        headerTitle: cat.title,
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CategoryMealsScreen;