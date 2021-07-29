import { StyleSheet } from 'react-native';
import { theme } from '../theme';
import { windowHeight, windowWidth } from './dimensions';

export const liveInfoStyle = StyleSheet.create({
    liveContainer: {
        flexDirection: "row",
        width: '100%',
        borderRadius: 5,
        backgroundColor: theme.colors.bgTransparent,
        padding:5,
        marginVertical: 20
    },
    imageContainer: {
        margin:10,
        flex: 0.4
    },
    image: {
        width: "100%",
        height: windowHeight * .13,
        borderRadius: 5
    },
    descriptionContainer: {
        margin:10,
        flex: 0.6,
        justifyContent: 'center'
    },
    liveStatusContainer: {
        flexDirection: 'row'
    },
    liveStatus: {
        color: theme.colors.primary,
        paddingHorizontal: 5,
        paddingVertical: 2,
        backgroundColor: theme.colors.bgDarkTransparent,
        flex: 0,
        marginBottom: 5
    },
    liveTitle: {
        color: theme.colors.primary,
        fontSize: 18,
        fontWeight: 'bold'
    },
    liveSubTitle: {
        color: theme.colors.primary
    },
    liveInfoLoadingContainer: {
        width: '100%',
        height: windowHeight * .16,
        borderRadius: 5,
        backgroundColor: theme.colors.bgTransparent,
        padding:5,
        marginVertical: 20,
        justifyContent: 'center'
    },
    liveInfoLoading:{
        width: windowWidth - 50,
    }
});