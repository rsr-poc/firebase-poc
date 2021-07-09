import { StyleSheet } from 'react-native';
import { homeStyle } from './homeStyle';
import { playerStyle } from './playerStyle';


const globalStyle = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
});

export const styles = {
    global: globalStyle,
    home: homeStyle,
    player: playerStyle
}