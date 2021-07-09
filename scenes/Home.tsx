import React from 'react';
import { View, Image, ImageBackground } from "react-native"
import { styles } from '../themes/radioad/styles/style';

//components
import Header from '../components/organisms/headers/HeaderHome'
import LiveInfo from '../components/organisms/live-info/LiveInfo';
import Player from '../components/organisms/player/Player';

export default () =>{
    return (
        <View style={styles.global.container}>
            <ImageBackground source={require('../assets/bg.png')} style={styles.home.bgImage}>
                <Header></Header>
                <View style={styles.home.homeView}>
                    <Image source={require('../assets/logo.png')} style={styles.home.logo} />
                    <LiveInfo />
                    <Player />
                </View>
            </ImageBackground>
        </View>
    )
}