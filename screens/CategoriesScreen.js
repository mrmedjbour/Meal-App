import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import color from '../conf/Color';

import { CATEGORIES } from '../data/dummy-data';

const CategoriesScreen = props => {
    const renderGridItem = (itemData) => {
        return (
            <TouchableOpacity style={styles.gridItem} onPress={() => { props.navigation.navigate('CategoryMeals', { catId: itemData.item.id } ) }}>
                <View>
                    <Text>{itemData.item.title}</Text>
                </View>
            </TouchableOpacity>
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
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(26,165,0,0.62)',
    },
});

export default CategoriesScreen;