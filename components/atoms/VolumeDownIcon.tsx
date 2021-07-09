import React from 'react';
import { Icon } from 'react-native-elements';
import { styles } from '../../themes/radioad/styles/style';
import { theme } from '../../themes/radioad/theme';

export default () =>{
    return (
        <Icon
        name='volume'
        type='feather'
        color={theme.colors.primary}
        />
    )
}