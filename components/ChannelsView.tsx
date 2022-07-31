import React from 'react';
import {View, Text} from 'react-native';
import {CHANNEL_LIST_TYPE, styles} from '../screens/Following';
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

export default React.memo(ChannelsView);
