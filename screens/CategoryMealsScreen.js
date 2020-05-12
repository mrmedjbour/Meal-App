import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import {CATEGORIES} from "../data/dummy-data";
import color from "../conf/Color";

const CategoryMealsScreen = props => {
    const catId = props.navigation.getParam('catId');
    const cat = CATEGORIES.find(cat => cat.id === catId)
    console.log(cat);
    return (
        <View style={styles.screen}>
            <Text> Category Meals Screen {cat.title} </Text>
            <Button onPress={() => { props.navigation.navigate('MealDetail'); }} title={'Meal Detail!'} />
            <Button title={'Go Back!'} onPress={() => { props.navigation.goBack(); }} />
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