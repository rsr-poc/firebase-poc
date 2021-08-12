import { StyleSheet } from 'react-native';
import { windowHeight, windowWidth } from './dimensions';

export const menuStyle = StyleSheet.create({
    logo: {
        marginTop: 50,
        marginBottom: 20,
        width: windowWidth - 170,
        height: windowHeight * .15,
        resizeMode: 'contain',
    }
})