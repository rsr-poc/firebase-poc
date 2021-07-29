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
            basta seguir o link da play store (android): link1, ou da app store (ios): link2`,
          });
        } catch (error) {
          alert(error.message);
        }
      };

    return (
        <Button icon={<ShareIcon />} type="clear" containerStyle={styles.player.buttonSide} onPress={onShare}/>
    )
}