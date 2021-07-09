import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Slider } from 'react-native-elements';
import { Animated } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { Audio } from "expo-av";

const soundObject = new Audio.Sound();
export default () => {
    const [volume, setVolume] = useState(75);
    const [sound, setSound] = React.useState(false);

    async function radio() {

        if(!sound){
            try {
                await soundObject.loadAsync({uri: 'http://stm23.xcast.com.br:7362'});
                await soundObject.playAsync();
                setSound(true)
              } catch (error) {
                console.log('erro')
                // An error occurred!
              }
        }else{
            try {
                await soundObject.pauseAsync();
                await soundObject.unloadAsync();
                setSound(false);
            }catch (error) {
                console.log(error)
                // An error occurred!
              }
        }
      }

    return (
        <View style={{flexDirection: "column"}}>
        <View style={{flexDirection:"row", alignItems:'center'}}>
            <Button
icon={
    <Icon
    name='message-circle'
    type='feather'
    color='white'
    containerStyle={{ padding: 20}}
    />
}
  type="clear"
  containerStyle={{borderRadius: 60, marginHorizontal: 10}}
  
/>

<Button
icon={
    <Icon
    name={!sound? 'play' : 'pause'}
    type='feather'
    color='white'
    containerStyle={{ paddingRight: 30, paddingLeft: 35, paddingVertical: 32}}
    size={30}
    />
}
onPress={radio}
  type="clear"
  containerStyle={{backgroundColor:"rgba(255,255,255,0.1)", borderRadius: 60,  borderColor: 'white', borderWidth: .5}}
  
/>

<Button
icon={
    <Icon
    name='share-2'
    type='feather'
    color='white'
    containerStyle={{ padding: 20}}
    />
}
  type="clear"
  containerStyle={{borderRadius: 60, marginHorizontal: 10}}
  
/>
</View>

<View style={{flexDirection:"row", alignItems:'center'}}>
<Icon
    name='volume'
    type='feather'
    color='white'
    />
    <Slider
        value={volume}
        style={{marginVertical: 10, marginRight: 10, flex: 1}}
        onValueChange={(value) => setVolume( value )}
        thumbTintColor='white'
        thumbStyle={{width: 20, height: 20}}
        minimumTrackTintColor="white"
        maximumValue={100}
        minimumValue={0}
    />
        <Icon
    name='volume-2'
    type='feather'
    color='white'
    />
</View>

</View>
    )
}