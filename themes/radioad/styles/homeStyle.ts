import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const windowWidth =  Dimensions.get('window').width;
const windowHeight =  Dimensions.get('window').height;

export const homeStyle = StyleSheet.create({
    bgImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    homeView: {
        padding: 20,
        flex: 1,
        flexDirection: 'column',
        justifyContent: "space-around",
        alignItems: 'center',
    },
    logo: {
        width: windowWidth - 50,
        height: windowHeight * .25,
        resizeMode: 'contain',
        marginBottom: 20
    }
});