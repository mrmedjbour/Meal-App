import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

import {CATEGORIES , MEALS } from "../data/dummy-data";
import color from "../conf/Color";

const CategoryMealsScreen = props => {
    const catId = props.navigation.getParam('catId');
    const cat = CATEGORIES.find(cat => cat.id === catId)
    const displayedMeals = MEALS.filter(
        meal => meal.categoryIds.indexOf(catId) >= 0
    );

    const renderMealItem = itemData => {
        return (
            <View>
                <Text>{itemData.item.title}</Text>
            </View>
        );
    };

    console.log(cat);
    return (
        <View style={styles.screen}>
            <FlatList data={displayedMeals} keyExtractor={(item, index) => item.id} renderItem={renderMealItem} />
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