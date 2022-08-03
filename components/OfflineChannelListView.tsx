import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../utils/colors';
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

const styles = StyleSheet.create({
  title: {
    color: colors.textColor,
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 4,
  },
});

export default React.memo(OfflineChannelListView);
