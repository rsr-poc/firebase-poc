import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
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
        width: 150,
        height: 150,
        resizeMode: 'contain',
        marginBottom: 20
    }

});