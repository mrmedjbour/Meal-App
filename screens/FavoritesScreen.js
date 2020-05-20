import React from 'react';

import  { useSelector } from "react-redux";
import MealList from "../components/MealList";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

const FavoritesScreen = props => {
    const FavoritesMeals = useSelector(state => state.meals.favoriteMeals);

    return (
        <MealList listData={FavoritesMeals} navigation={props.navigation} />
    );
};

FavoritesScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Meal Categories',
        headerTitleStyle: {
            textAlign: 'center',
            color: '#fff',
        },
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

export default FavoritesScreen;