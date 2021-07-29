import React from 'react';
import { View, Text } from 'react-native';
import { Image, LinearProgress } from 'react-native-elements';
import { useInfo } from '../../../hooks/useInfo';
import { LiveInfoModel } from '../../../models/liveInfo.model';
import { styles } from '../../../themes/radioad/styles/style';

export default () => {
    const {data, loading, error} = useInfo<LiveInfoModel>();
   
    return (
        <View>
        {data?
        <View style={styles.liveInfo.liveContainer}>

            <View style={styles.liveInfo.imageContainer}>
                <Image source={{uri: data.capa_musica}} style={styles.liveInfo.image} />
            </View>
            <View style={styles.liveInfo.descriptionContainer}>
                <View style={styles.liveInfo.liveStatusContainer}>
                    <Text  numberOfLines={1} style={styles.liveInfo.liveStatus}>Ao vivo</Text>
                </View>
                <Text numberOfLines={1} style={styles.liveInfo.liveTitle}>{data.musica_atual}</Text>
                <Text numberOfLines={1} style={styles.liveInfo.liveSubTitle}>A seguir: {data.proxima_musica}</Text>
            </View>
        </View>
        : loading?
        <View style={styles.liveInfo.liveInfoLoadingContainer}><LinearProgress color="primary" variant="indeterminate" style={styles.liveInfo.liveInfoLoading} /></View>
        :
        <View style={styles.liveInfo.liveContainer}><Text>error</Text></View>
        }
        </View>
    )
}