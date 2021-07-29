import { StyleSheet } from 'react-native';
import { windowHeight, windowWidth } from './dimensions';

export const homeStyle = StyleSheet.create({
    bgImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    homeView: {
        padding: 20,
        paddingTop: 0,
        flex: 1,
        flexDirection: 'column',
        justifyContent: "space-around",
        alignItems: 'center',
    },
    logo: {
        width: windowWidth - 50,
        height: windowHeight * .25,
        resizeMode: 'contain',
    }
});