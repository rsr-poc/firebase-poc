import React from 'react';
import { Header } from 'react-native-elements';

interface headerHomeProps {
    pressMenu: ()=>void
}
export default ({pressMenu}: headerHomeProps) => {
    return (
        <Header
            statusBarProps={{ barStyle: 'light-content' }}
            rightComponent={{ icon: 'menu', color: '#fff', onPress: pressMenu }}
            backgroundColor="transparent"
            containerStyle={{borderBottomColor: 'transparent'}}
        />
    )
}