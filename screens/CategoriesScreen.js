import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { CATEGORIES } from '../data/dummy-data';
import CategoryCard from "../components/CategoryCard";
import HeaderButton from "../components/HeaderButton";

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

CategoriesScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Meal Categories',
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title={'Menu'}
                    packIcon={'Ionicons'}
                    iconName={'ios-menu'}
                    onPress={() => {
                        navData.navigation.toggleDrawer();
                    }}
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
});

export default CategoriesScreen;