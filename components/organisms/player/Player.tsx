import React, { useState, useEffect } from 'react';
import { View, Image, Text } from 'react-native';
import { Slider } from 'react-native-elements';
import { Audio, AVPlaybackStatus } from "expo-av";
import { styles } from '../../../themes/radioad/styles/style';
import { theme } from '../../../themes/radioad/theme';
import PlayButton from '../../molecules/PlayButton';
import VolumeDownIcon from '../../atoms/VolumeDownIcon';
import VolumeUpIcon from '../../atoms/VolumeUpIcon';
import ShareButton from '../../molecules/ShareButton';
import WhatsAppButton from '../../molecules/WhatsAppButton';


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
        <View style={styles.player.equalizerContainer}>
            {
              isPlaying ? <Image source={require('../../../assets/equalizer.gif')} style={styles.player.equalizer} />
              : <Image source={require('../../../assets/equalizer_paused.png')} style={styles.player.equalizer} />
            }
        </View>
        <View style={styles.player.controlContainer}>
            <WhatsAppButton />
            <PlayButton isLoaded={isBuffering?.isLoaded} isPlaying={isPlaying} press={radio} />
            <ShareButton />
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