import React from 'react';
import { View, Text } from 'react-native';
import { Image } from 'react-native-elements';
import { Chip } from 'react-native-elements';


export default () => {
    return (
        <View
        style={{
            flexDirection: "row",
            width: '100%',
            height: 150,
            borderRadius: 5,
            backgroundColor: 'rgba(255,255,255,0.06)',
            padding:10,
            marginVertical: 20
          }}
        >
        <View style={{ margin:10, flex: 0.4 }}>
            <Image source={{uri: 'https://studiosol-a.akamaihd.net/tb/letras-blog/wp-content/uploads/2019/07/9341a8b-anderson_freire.jpg'}} style={{ width: "100%", height:110, borderRadius: 5}} />
        </View>
        <View style={{ margin:10, flex: 0.6, justifyContent: 'center' }}>
            <View style={{flexDirection: 'row'}}>
                <Text  numberOfLines={1} style={{color: 'white', paddingHorizontal: 5, paddingVertical: 2, backgroundColor: 'rgba(0,0,0,0.14)', flex: 0, marginBottom: 5}}>Ao vivo</Text>
            </View>

            <Text numberOfLines={1} style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>Cristo é solução</Text>
            <Text numberOfLines={1} style={{color: 'white'}}>Pastor Jairo de Jesus</Text>
        </View>

        </View>
    )
}