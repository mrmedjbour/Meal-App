import React from 'react';

import  { useSelector } from "react-redux";
import MealList from "../components/MealList";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import { View, Text, StyleSheet } from 'react-native';
import color from '../conf/Color'
import { AntDesign } from '@expo/vector-icons';

const FavoritesScreen = props => {
    const FavoritesMeals = useSelector(state => state.meals.favoriteMeals);

    if (FavoritesMeals.length === 0){
        return (
            <View style={styles.screen}>
                <AntDesign name="unknowfile1" size={50} color={color.emptyText} style={styles.icon} />
                <Text style={styles.text}>No favorite meals found. Start adding some!</Text>
            </View>
        );
    }

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

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: color.emptyText,
        fontFamily: 'open-sans-bold',
    },
    icon: {
        marginVertical: 30,
    }
});

export default FavoritesScreen;