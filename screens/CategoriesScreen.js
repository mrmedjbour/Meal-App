import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import color from '../conf/Color';

import { CATEGORIES } from '../data/dummy-data';
import CategoryCard from "../components/CategoryCard";

const CategoriesScreen = props => {
    const renderGridItem = (itemData) => {
        return (
            <CategoryCard title={itemData.item.title} color={itemData.item.color} onSelect={ () => props.navigation.navigate('CategoryMeals',{ catId: itemData.item.id }) } />
        );
    };
    return (
            <FlatList data={CATEGORIES} numColumns={2} renderItem={renderGridItem} />
    );
};

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories',
    headerTitleStyle: {
        textAlign: 'center',
    }
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CategoriesScreen;