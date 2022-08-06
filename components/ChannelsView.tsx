import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CHANNEL_LIST_TYPE} from '../screens/Following';
import {colors} from '../utils/colors';
import LiveChannelCard from './LiveChannelCard';

const ChannelsView: React.FC<{
  type?: CHANNEL_LIST_TYPE;
}> = props => {
  let title;
  if (props.type === CHANNEL_LIST_TYPE.LIVE) {
    title = 'Your Live Channels';
  } else if (props.type === CHANNEL_LIST_TYPE.RECOMMENDED) {
    title = 'Channels Recommended For You';
  } else {
    title = 'Continue Watching';
  }
  return (
    <View style={{marginTop: 24}}>
      <Text style={styles.title}>{title}</Text>
      <View style={{marginTop: 12}}>
        <LiveChannelCard type={props.type} />
        <LiveChannelCard type={props.type} />
        <LiveChannelCard type={props.type} />
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

export default React.memo(ChannelsView);
