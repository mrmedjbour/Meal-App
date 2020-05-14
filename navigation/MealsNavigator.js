import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import color from "../conf/Color";

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: {
        screen: CategoryMealsScreen
    },
    MealDetail: MealDetailScreen,
}, {
    initialRouteName: 'Categories',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: color.primary,
        },
        headerTitleStyle: {
            color: '#fff',
        }
    },
});

const MealsTabNavigator = createBottomTabNavigator({
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarLabel: 'Meals',
            tabBarIcon: (tabInfo) => {
                return <Ionicons name="ios-restaurant" size={25} color="white" />;
            }
        },
    },
    Favorites: {
        screen: FavoritesScreen,
        navigationOptions: {
            tabBarLabel: 'Favorites',
            tabBarIcon: (tabInfo) => {
                return <MaterialIcons name="favorite" size={25} color="white" />;
            }
        },
    },
}, {
    tabBarOptions: {
        // activeTintColor: color.accent,
        // inactiveTintColor: color.accent,
        activeBackgroundColor: color.activeTab,
        inactiveBackgroundColor: color.primary,
    },
});

export default createAppContainer(MealsTabNavigator);