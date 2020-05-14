import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import FiltersScreen from "../screens/FiltersScreen";
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

const FavoritesNavigator = createStackNavigator({
    Favorites: {
        screen: FavoritesScreen,
        navigationOptions: {
            headerTitleAlign: "center",
            headerTitle: "Your Favorites",
        },
    },
    MealDetail: {
        screen: MealDetailScreen,
    },
}, {
    initialRouteName: 'Favorites',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: color.primary,
        },
        headerTitleStyle: {
            color: '#fff',
        }
    },
});

const TabScreenConfig = {
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
        screen: FavoritesNavigator,
        navigationOptions: {
            tabBarLabel: 'Favorites',
            tabBarIcon: (tabInfo) => {
                return <Ionicons name="ios-star" size={25} color="white" />;
            }
        },
    },
};

const MealsTabNavigator = Platform.OS === "android"
    ? createMaterialBottomTabNavigator(TabScreenConfig, {
        initialRouteName: 'Meals',
        activeColor: color.TabText,
        inactiveColor: color.TabText,
        labeled: false,
        barStyle: { backgroundColor: color.primary },
    })
    : createBottomTabNavigator(TabScreenConfig, {
    tabBarOptions: {
        showLabel: false, // show text on tab buttons
        activeTintColor: color.TabText,
        inactiveTintColor: color.TabText,
        activeBackgroundColor: color.activeTab,
        inactiveBackgroundColor: color.primary,
    },
});

const FilterNavigator = createStackNavigator({
    Filters: {
        screen: FiltersScreen,
    }
});

const MainNavigator = createDrawerNavigator({
    FavoritesMeal: MealsTabNavigator,
    Filters: FilterNavigator,
});

export default createAppContainer(MainNavigator);