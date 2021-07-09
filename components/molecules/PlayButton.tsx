import React from 'react';
import { Button, Icon } from 'react-native-elements';
import { styles } from '../../themes/radioad/styles/style';
import { theme } from '../../themes/radioad/theme';
import PauseIcon from '../atoms/PauseIcon';
import PlayIcon from '../atoms/PlayIcon';

interface playButtonProps{
    isLoaded: boolean | undefined,
    isPlaying: boolean,
    press: () => Promise<void>
}
export default ({isLoaded, isPlaying, press}: playButtonProps) =>{
    return (
        <Button
        icon={
        (isLoaded && isPlaying)?
            <PauseIcon />
        : (!isPlaying)?
            <PlayIcon />
        : false
        }
        loading={ (!isLoaded && isPlaying)? true : false}
        loadingStyle={styles.player.buttonIconPlayerLoading}
        onPress={press}
        type="clear"
        containerStyle={styles.player.buttonPlayer}
        />
    )
}