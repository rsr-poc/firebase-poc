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
import { useRadioConfig } from '../../../hooks/useRadioConfig';
import { RadioConfigModel } from '../../../models/radioConfig.model';
import { RadioConfigsService } from '../../../services/radio-configs.service';


const soundObject = new Audio.Sound();
export default () => {
    const [volume, setVolume] = useState(.75);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isBuffering, setIsBuffering] = useState<AVPlaybackStatus>();
    const [sound, setSound] = React.useState<Audio.Sound>();
    const radioConfigService = new RadioConfigsService();
    const [config, setConfig] = useState<RadioConfigModel>();

    useEffect(()=>{
      sound?.setVolumeAsync(volume)
    })

    useEffect(()=>{
      getConfig();
    }, [])

    async function getConfig(){
      try{
        const config = await radioConfigService.get();
        setConfig(config)
      }catch(e){
        return e;
      }
    }

    async function load(){
      setIsPlaying(true);
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
      const status = {
        shoudPlay: isPlaying,
        volume: volume
      }
      playbackInstance.setOnPlaybackStatusUpdate((status)=> setIsBuffering(status))
      
      let sourceActive;
      let control = 0;
      while(!sourceActive){
        try{
          if(control % 2 === 0 && config){
            const source = {uri: config.ipMaster}
            await playbackInstance.loadAsync(source, status, false)
            await playbackInstance.playAsync();
            setSound(playbackInstance);
            sourceActive = true
          }
          else if(control % 2 === 1 && config){
            const source = {uri: config.ipSlave}
            await playbackInstance.loadAsync(source, status, false)
            await playbackInstance.playAsync();
            setSound(playbackInstance);
            sourceActive = true
          }
        }catch(e){
          console.log(e)
          control++
          if(control === 6 ){
            setIsPlaying(false)
            sourceActive = true
          }else{
            sourceActive = false
          }
        }
      }

    }

    async function radio(){
      if(!isPlaying){
        console.log(config)
        if(config){
          load();
        }
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