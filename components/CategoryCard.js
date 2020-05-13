import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Platform, TouchableNativeFeedback} from 'react-native';

const CategoryCard = props => {
    let TouchableComp = TouchableOpacity;
    if (Platform.OS === "android" && Platform.Version >= 21){
        TouchableComp = TouchableNativeFeedback;
    }
    return (
            <TouchableComp onPress={props.onSelect}>
                <View style={{...styles.gridItem, backgroundColor: props.color}}>
                    <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
                </View>
            </TouchableComp>
    );
};

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        color: '#fff',
        fontSize: 18,
        textAlign: 'right',
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 15,
        backgroundColor: 'rgba(26,165,0,0.62)',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width:0, height: 2},
        shadowRadius: 10,
        elevation: 3,
    },
});

export default CategoryCard;