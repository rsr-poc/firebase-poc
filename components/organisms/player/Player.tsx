import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Slider } from 'react-native-elements';
import { Animated } from 'react-native';
import { Button } from 'react-native-elements';
import { Audio, AVPlaybackStatus } from "expo-av";
import { styles } from '../../../themes/radioad/styles/style';
import { theme } from '../../../themes/radioad/theme';
import WhatsappIcon from '../../atoms/WhatsappIcon';
import PlayButton from '../../molecules/PlayButton';
import ShareIcon from '../../atoms/ShareIcon';
import VolumeDownIcon from '../../atoms/VolumeDownIcon';
import VolumeUpIcon from '../../atoms/VolumeUpIcon';

const soundObject = new Audio.Sound();
export default () => {
    const [volume, setVolume] = useState(.75);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isBuffering, setIsBuffering] = useState<AVPlaybackStatus>();
    const [sound, setSound] = React.useState<Audio.Sound>();

    useEffect(()=>{
      sound?.setVolumeAsync(volume)
    })


    async function load(){
      setIsPlaying(true);
      try{
        Audio.setAudioModeAsync({
            allowsRecordingIOS: false,
            staysActiveInBackground: true,
            interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DUCK_OTHERS,
            playsInSilentModeIOS: true,
            shouldDuckAndroid: true,
            interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
            playThroughEarpieceAndroid: false
        })
        const playbackInstance = new Audio.Sound()
        const source = {
          uri: 'http://stm23.xcast.com.br:7362'
        }
        const status = {
          shoudPlay: isPlaying,
          volume: volume
        }
        playbackInstance.setOnPlaybackStatusUpdate((status)=> setIsBuffering(status))
        await playbackInstance.loadAsync(source, status, false)
        await playbackInstance.playAsync();
        setSound(playbackInstance);
      } catch (e) {
        console.log(e)
      }
    }

    async function radio(){
      if(!isPlaying){
        load();
      }else{
        try{
          await sound?.pauseAsync();
          sound?.setOnPlaybackStatusUpdate((status)=> setIsBuffering(status))
          setIsPlaying(false);  
        }catch(e){
          console.log(e)
        }
      }
    }

    return (
      <View style={styles.player.container}>
        <View style={styles.player.controlContainer}>
            <Button icon={<WhatsappIcon />} type="clear" containerStyle={styles.player.buttonSide} />
            <PlayButton isLoaded={isBuffering?.isLoaded} isPlaying={isPlaying} press={radio} />
            <Button icon={<ShareIcon />} type="clear" containerStyle={styles.player.buttonSide}/>
        </View>
        <View style={styles.player.volumeContainer}>
          <VolumeDownIcon />
            <Slider
                value={volume}
                style={styles.player.volumeSlider}
                onValueChange={(value) => setVolume( value )}
                thumbTintColor={theme.colors.primary}
                thumbStyle={styles.player.volumeThumb}
                minimumTrackTintColor={theme.colors.primary}
                maximumValue={1}
                minimumValue={0}
            />
          <VolumeUpIcon />
        </View>
      </View>
    )
}