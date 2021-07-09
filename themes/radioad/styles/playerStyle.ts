import { StyleSheet } from 'react-native';
import { theme } from '../theme';
export const playerStyle = StyleSheet.create({
    container: {
        flexDirection: 'column',
    },
    controlContainer: {
        flexDirection:"row",
        alignItems:'center'
    },
    buttonSide:{
        borderRadius: 60,
        marginHorizontal: 10
    },
    buttonIconSide: {
        padding: 20
    },
    buttonIconPlayer: {
        paddingRight: 30,
        paddingLeft: 35,
        paddingVertical: 32
    },
    buttonIconPlayerLoading: {
        padding: 36,
        paddingHorizontal: 37
    },
    buttonPlayer: {
        backgroundColor: theme.colors.bgTransparent,
        borderRadius: 60,
        borderColor: 'white',
        borderWidth: .5
    },
    volumeContainer: {
        flexDirection:"row",
        alignItems:'center'
    },
    volumeSlider: {
        marginVertical: 10,
        marginRight: 10,
        flex: 1
    },
    volumeThumb:{
        width: 20,
        height: 20
    }
});