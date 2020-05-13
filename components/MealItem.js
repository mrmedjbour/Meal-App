import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';

const MealItem = props => {
    return (
        <View style={styles.mealItem}>
            <TouchableOpacity onPress={props.onSelectMeal}>
                <View>
                    <View style={{...styles.mealRow, ...styles.mealHeader}}>
                        <ImageBackground source={{uri: props.meal.imageUrl}} style={styles.bgImage} >
                            <Text style={styles.mealTitle} numberOfLines={1}>{props.meal.title}</Text>
                        </ImageBackground>
                    </View>
                    <View style={{...styles.mealRow, ...styles.mealDetail}}>
                        <Text>{props.meal.duration}m</Text>
                        <Text>{props.meal.complexity.toUpperCase()}</Text>
                        <Text>{props.meal.affordability}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    mealItem: {
        height: 200,
        backgroundColor: 'rgba(255,255,255,0.76)',
        margin: 10,
        borderRadius: 10,
        overflow: 'hidden',
    },
    mealHeader: {
        height: '85%'
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
    },
    mealTitle: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.52)',
        paddingVertical: 5,
        paddingHorizontal: 12,
        textAlign: 'center',
    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%',
    },
    mealRow: {
        flexDirection: 'row',
    },
});

export default MealItem;