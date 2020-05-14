import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

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
    },
    Favorites: {
        screen: FavoritesScreen,
    },
});

export default createAppContainer(MealsTabNavigator);