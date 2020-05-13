import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import { MEALS } from "../data/dummy-data";

const MealDetailScreen = props => {
    const mealId = props.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId);
    return (
        <View style={styles.screen}>
            <Text>{selectedMeal.title}</Text>

        </View>
    );
};

MealDetailScreen.navigationOptions = (navigationData) => {
    const selectedMeal = MEALS.find(meal => meal.id === navigationData.navigation.getParam('mealId'));
    return {
        headerTitle: selectedMeal.title,
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default MealDetailScreen;