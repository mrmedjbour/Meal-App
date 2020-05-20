import React from 'react';
import { useSelector } from 'react-redux';
import { View, StyleSheet, Text} from 'react-native';
import {CATEGORIES } from "../data/dummy-data";
import MealList from "../components/MealList";
import color from '../conf/Color';
import { AntDesign } from '@expo/vector-icons';

const CategoryMealsScreen = props => {
    const catId = props.navigation.getParam('catId');

    const availableMeals = useSelector(state => state.meals.filteredMeals);

    const displayedMeals = availableMeals.filter(
        meal => meal.categoryIds.indexOf(catId) >= 0
    );

    if (displayedMeals.length === 0){
        return (
            <View style={styles.screen}>
                <AntDesign name="unknowfile1" size={50} color={color.emptyText} style={styles.icon} />
                <Text style={styles.text}>No meals found, Maybe check your filters?</Text>
            </View>
        );
    }

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

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontFamily: 'open-sans-bold',
        color: color.emptyText,
    },
    icon: {
        marginVertical: 30,
    },
});

export default CategoryMealsScreen;