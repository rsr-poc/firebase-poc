import React from 'react';
import { Header } from 'react-native-elements';

export default () => {
    return (
        <Header
            statusBarProps={{ barStyle: 'light-content' }}
            rightComponent={{ icon: 'menu', color: '#fff' }}
            backgroundColor="transparent"
            containerStyle={{borderBottomColor: 'transparent'}}
        />
    )
}