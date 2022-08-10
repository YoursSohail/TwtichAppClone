import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {CHANNEL_LIST_TYPE} from '../screens/Following';
import {colors} from '../utils/colors';
import ViewsCounter from './ViewsCounter';

const LiveChannelCard: React.FC<{type?: CHANNEL_LIST_TYPE}> = props => {
  return (
    <View style={{flexDirection: 'row', marginBottom: 20}}>
      <View>
        <Image
          source={{uri: 'https://picsum.photos/200/300'}}
          style={{width: 120, height: 80}}
        />
        {props.type !== CHANNEL_LIST_TYPE.RECOMMENDED && <ViewsCounter />}
      </View>

      <View style={{marginHorizontal: 8}}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={{uri: 'https://picsum.photos/200/300'}}
            style={styles.image}
          />
          <Text style={styles.channelName}>tarik</Text>
        </View>
        <View style={{marginTop: 8}}>
          <Text style={styles.videoTitle}>
            FNATIC vs Leviatan | VCT Masters....
          </Text>
          <Text style={styles.category}>VALORANT</Text>
          <Text style={styles.languageChip}>English</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewsContainer: {
    flexDirection: 'row',
    position: 'absolute',
    left: 2,
    bottom: 24,
    alignItems: 'center',
  },
  redDot: {
    width: 10,
    height: 10,
    backgroundColor: 'red',
    borderRadius: 5,
  },
  view: {
    fontSize: 12,
    color: colors.textColor,
    fontWeight: 'bold',
    marginLeft: 4,
  },
  image: {width: 20, height: 20, borderRadius: 10},
  channelName: {
    color: colors.textColor,
    fontWeight: 'bold',
    marginLeft: 4,
  },
  videoTitle: {color: colors.textColor},
  category: {marginTop: 8, color: colors.secondaryTextColor},
  languageChip: {
    marginTop: 4,
    alignSelf: 'flex-start',
    color: colors.textColor,
    backgroundColor: colors.cardBackground,
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
});

export default React.memo(LiveChannelCard);
