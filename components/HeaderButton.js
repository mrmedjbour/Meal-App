import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import { AntDesign } from '@expo/vector-icons';

const CHeaderButton = props => {
    return (
        <HeaderButton
        {...props}
        IconComponent={ AntDesign }
        iconSize={23}
        color={'white'}
        />
    );
};

export default CHeaderButton;