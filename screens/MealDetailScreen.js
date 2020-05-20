import React, { useEffect, useCallback } from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Ionicons, Octicons } from '@expo/vector-icons';
import { useSelector, useDispatch } from "react-redux";

import HeaderButton from "../components/HeaderButton";
import { toggleFavorite } from "../store/actions/meals";
import color from '../conf/Color'

const MealDetailScreen = props => {
    const mealId = props.navigation.getParam('mealId');
    const MEALS = useSelector(state => state.meals.meals);
    const currentMailIsFavorite = useSelector(state => state.meals.favoriteMeals.some(meal => meal.id === mealId));
    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    const dispatch = useDispatch();

    const fMeals = useSelector(state => state.meals.favoriteMeals);

    const toggleFavoriteHandler = useCallback(() => {
        dispatch(toggleFavorite(mealId));
    }, [dispatch, mealId]);

    useEffect(() => {
        props.navigation.setParams({toggleFav: toggleFavoriteHandler});
    }, [toggleFavoriteHandler]);

    useEffect(() => {
        props.navigation.setParams({isFavorite: currentMailIsFavorite});
    }, [currentMailIsFavorite]);

    // useEffect(() => {
    //     props.navigation.setParams({mealTitle: selectedMeal.title });
    // }, [selectedMeal]);

    return (
        <ScrollView>
            <Image source={{uri: selectedMeal.imageUrl}} style={styles.mealImage}/>
            <View style={styles.mealInformation}>
                <View style={styles.col}>
                    <Ionicons name="md-time" size={24} color="black" />
                    <Text>{selectedMeal.duration}m</Text>
                </View>
                <View style={styles.col}>
                    <Octicons name="dashboard" size={24} color="black" />
                    <Text>{selectedMeal.complexity.toUpperCase()}</Text>
                </View>
                <View style={styles.col}>
                    <Ionicons name="md-pricetag" size={24} color="black" />
                    <Text>{selectedMeal.affordability.toUpperCase()}</Text>
                </View>
            </View>
            <View style={styles.detail}>
                <Text style={styles.title}>Ingredients</Text>
                {selectedMeal.ingredients.map(ingredient => (
                    <Text key={ingredient} style={styles.listItem}>{ingredient}</Text>
                ))}
                <Text style={styles.title}>Steps</Text>
                {selectedMeal.steps.map(step => (
                    <Text key={step} style={styles.listItem}>{step}</Text>
                ))}
            </View>
        </ScrollView>
    );
};

MealDetailScreen.navigationOptions = (navigationData) => {
    // const selectedMeal = MEALS.find(meal => meal.id === navigationData.navigation.getParam('mealId'));
    const mealTitle = navigationData.navigation.getParam('mealTitle');
    const toggleFavorite = navigationData.navigation.getParam('toggleFav');
    const isFavorite = navigationData.navigation.getParam('isFavorite');
    return {
        headerTitle: mealTitle,
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Favorite"
                    packIcon={'AntDesign'}
                    iconName={isFavorite ? 'star':'staro'}
                    onPress={toggleFavorite}
                />
            </HeaderButtons>
        )
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    col: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    mealImage: {
        width: '100%',
        height: 200,
    },
    mealInformation: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 15,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 20,
        fontFamily: 'open-sans-bold',
        color: color.title,
    },
    detail: {
        padding: 10,
    },
    listItem: {
        marginVertical: 10,
        marginHorizontal: 15,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10,
        fontFamily: 'open-sans',
    },
});

export default MealDetailScreen;