import React from 'react';
import {View, Image, Text} from 'react-native';
import {styles} from '../screens/Following';
import {colors} from '../utils/colors';

const OfflineChannelListCard: React.FC = () => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 8}}>
      <Image
        source={{uri: 'https://picsum.photos/200/300'}}
        style={{
          width: 32,
          height: 32,
          borderRadius: 16,
        }}
      />
      <View style={{marginLeft: 8}}>
        <Text style={styles.cardTitle}>sinatraa</Text>
        <Text style={{color: colors.secondaryTextColor}}>17 new videos</Text>
      </View>
    </View>
  );
};

export default React.memo(OfflineChannelListCard);
