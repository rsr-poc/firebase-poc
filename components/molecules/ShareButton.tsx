import React from 'react';
import { Button } from 'react-native-elements';
import { styles } from '../../themes/radioad/styles/style';
import ShareIcon from '../atoms/ShareIcon';
import { Share } from 'react-native';

export default () =>{

    const onShare = async () => {
        try {
          const result = await Share.share({
            message: `Olá, gostaria de compartilhar com você o app da rádio AD Catalão. \n
            basta seguir o link da play store (android): https://play.google.com/store/apps/details?id=br.com.radioadc, ou da app store (ios): https://apps.apple.com/us/app/r%C3%A1dio-ad-catal%C3%A3o/id1581470452`,
          });
        } catch (error) {
          alert(error.message);
        }
      };

    return (
        <Button icon={<ShareIcon />} type="clear" containerStyle={styles.player.buttonSide} onPress={onShare}/>
    )
}