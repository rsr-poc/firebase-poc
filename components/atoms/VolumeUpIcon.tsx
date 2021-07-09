import React from 'react';
import { Icon } from 'react-native-elements';
import { styles } from '../../themes/radioad/styles/style';
import { theme } from '../../themes/radioad/theme';

export default () =>{
    return (
        <Icon
        name='volume-2'
        type='feather'
        color={theme.colors.primary}
        />
    )
}