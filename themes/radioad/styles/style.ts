import { StyleSheet } from 'react-native';
import { homeStyle } from './homeStyle';
import { liveInfoStyle } from './liveInfoStyle';
import { menuStyle } from './menuStyle';
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
    menu: menuStyle,
    player: playerStyle,
    liveInfo: liveInfoStyle

}