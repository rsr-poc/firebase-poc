import React, { useState, useEffect } from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import { styles } from '../../../themes/radioad/styles/style';

export default () =>{
    return (
        <ImageBackground source={require('../../../assets/bg.png')} style={styles.home.bgImage}>
            <View style={{alignItems: 'center'}}>
                <Image source={require('../../../assets/logo.png')} style={styles.menu.logo} />
            </View>
            <View style={{backgroundColor: "white", flexDirection: 'column', flex: 1, padding: 20}}>
                <Text style={{textAlign: 'center'}}>Abençoando seus ouvintes com louvores e adoração a Deus.</Text>
                <Image source={require('../../../assets/creditos.png')} style={styles.menu.logo} />
            </View>
        </ImageBackground>

    )
}