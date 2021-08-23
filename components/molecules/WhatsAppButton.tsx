import React from 'react';
import { Linking } from 'react-native';
import { Button } from 'react-native-elements';
import { styles } from '../../themes/radioad/styles/style';
import WhatsappIcon from '../atoms/WhatsappIcon';

export default () =>{
    const whatsapp = () =>{
        return Linking.openURL('https://wa.me/556499953097')
    }
    return (
        <Button icon={<WhatsappIcon />} type="clear" containerStyle={styles.player.buttonSide} onPress={whatsapp} />
    )
}