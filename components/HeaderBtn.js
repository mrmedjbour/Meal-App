import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import {} from 'react-native';
import color from '../conf/Color';

const HeaderBtn = props => {
    return <HeaderButton {...props} IconComponent={Ionicons} iconSize={23} color={'white'} />;
};

export default HeaderBtn;