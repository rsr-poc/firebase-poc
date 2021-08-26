import React from 'react';
import { View, Image, ImageBackground, Animated, TouchableOpacity, Text } from "react-native"
import { styles } from '../themes/radioad/styles/style';
import SideMenu from 'react-native-side-menu-updated'
import { useState } from 'react';


//components
import Header from '../components/organisms/headers/HeaderHome'
import LiveInfo from '../components/organisms/live-info/LiveInfo';
import Player from '../components/organisms/player/Player';
import Menu from '../components/organisms/menu'
import WebView from 'react-native-webview';
import { useRef } from 'react';
import { useEffect } from 'react';

export default () =>{
    const menu = <Menu />
    const [openMenu, setOpenMenu] = useState(false);

    const handleOpenMenu = () => {
        setOpenMenu(!openMenu)
    }

    const handleChange = (isOpen: boolean) =>{
        setTimeout(()=>setOpenMenu(isOpen), 100)
    }

    
    const webview = useRef(null);

    return (
        <SideMenu menu={menu} isOpen={openMenu} menuPosition={'right'} onChange={handleChange}>
            <View style={styles.global.container}>
                <ImageBackground source={require('../assets/bg.png')} style={styles.home.bgImage}>
                    <Header pressMenu={handleOpenMenu}></Header>
                    <View style={styles.home.homeView}>
                        <Image source={require('../assets/logo.png')} style={styles.home.logo} />
                        <LiveInfo />
                         <Player />
                    </View>
                </ImageBackground>
            </View>
        </SideMenu>
        
    )
}