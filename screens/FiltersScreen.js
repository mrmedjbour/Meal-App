import React, { useState, useEffect, useCallback } from 'react';
import {View, Text, StyleSheet, Switch, ScrollView} from 'react-native';
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import color from '../conf/Color';

const FilterSwitch = props => {
    return (
        <View style={styles.filterContainer}>
            <Text style={styles.label}>{props.label}</Text>
            <Switch
                value={props.value}
                trackColor={{true: color.activeTab }}
                thumbColor={color.primary}
                onValueChange={props.onChange}
            />
        </View>
    );
};

const FiltersScreen = props => {
    const { navigation } = props;

    const [isGlutenFree,setIsGlutenFree] = useState(false);
    const [isLactoseFree,setIsLactoseFree] = useState(false);
    const [isVegan,setIsVegan] = useState(false);
    const [isVegetarian,setIsVegetarian] = useState(false);

    const saveFilters = useCallback(() => {
        const currentFilters = {
            isGlutenFree: isGlutenFree,
            isLactoseFree: isLactoseFree,
            isVegan: isVegan,
            isVegetarian: isVegetarian,
        };
        console.log(currentFilters);
    }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

    useEffect(() => {
        navigation.setParams({save: saveFilters});
    }, [saveFilters]);

    return (
        <ScrollView>
            <View style={styles.screen}>
                    <Text style={styles.title}> Available Filters / Restrictions </Text>
                    <FilterSwitch label={'Gluten-free'} value={isGlutenFree} onChange={value => setIsGlutenFree(value)}/>
                    <FilterSwitch label={'Lactose-free'} value={isLactoseFree} onChange={value => setIsLactoseFree(value)}/>
                    <FilterSwitch label={'Vegan'} value={isVegan} onChange={value => setIsVegan(value)}/>
                    <FilterSwitch label={'Vegetarian'} value={isVegetarian} onChange={value => setIsVegetarian(value)}/>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        textAlign: 'center',

    },
    filterContainer: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 15,
    },
    label: {
        fontFamily: 'open-sans',
    },
});

FiltersScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Filter Meals',
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
        ),
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title={'Menu'}
                    packIcon={'Ionicons'}
                    iconName={'ios-save'}
                    onPress={() => {
                        navData.navigation.getParam('save')();
                    }}
                />
            </HeaderButtons>
        ),

    };
};

export default FiltersScreen;