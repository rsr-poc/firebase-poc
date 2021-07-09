import React from 'react';
import { Icon } from 'react-native-elements';
import { styles } from '../../themes/radioad/styles/style';
import { theme } from '../../themes/radioad/theme';

export default () =>{
    return (
        <Icon
        name='pause'
        type='feather'
        color={theme.colors.primary}
        containerStyle={styles.player.buttonIconPlayer}
        size={30}
        />
    )
}