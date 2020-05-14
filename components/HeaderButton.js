import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import { AntDesign, Ionicons } from '@expo/vector-icons';

const CHeaderButton = props => {
    return (
        <HeaderButton
        {...props}
        IconComponent={ props.packIcon === "AntDesign" ? AntDesign : Ionicons }
        iconSize={23}
        color={'white'}
        />
    );
};

export default CHeaderButton;