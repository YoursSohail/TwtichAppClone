import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../screens/Following';
import OfflineChannelListCard from './OfflineChannelListCard';

const OfflineChannelListView: React.FC = () => {
  return (
    <View style={{marginBottom: 8}}>
      <Text style={styles.title}>Your Offline Channels</Text>
      <View style={{marginBottom: 8}}>
        <OfflineChannelListCard />
        <OfflineChannelListCard />
        <OfflineChannelListCard />
      </View>
    </View>
  );
};

export default React.memo(OfflineChannelListView);
