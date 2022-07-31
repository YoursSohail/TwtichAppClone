import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import React from 'react';
import TopBar from '../components/TopBar';
import {colors} from '../utils/colors';
import ChannelsView from '../components/ChannelsView';
import FollowingCategoriesView from '../components/FollowingCategoriesView';
import OfflineChannelListView from '../components/OfflineChannelListView';

export enum CHANNEL_LIST_TYPE {
  LIVE = 'LIVE',
  RECOMMENDED = 'RECOMMENDED',
  CONTINUE = 'CONTINUE',
}

const Following = () => {
  return (
    <View style={{flex: 1}}>
      <TopBar />
      <View
        style={{
          backgroundColor: colors.background,
        }}>
        <View style={{paddingHorizontal: 4}}>
          <Text
            style={{fontSize: 30, color: colors.textColor, fontWeight: 'bold'}}>
            Following
          </Text>
        </View>
        <ScrollView>
          <View style={{paddingBottom: 80}}>
            <FollowingCategoriesView />
            <ChannelsView />
            <ChannelsView type={CHANNEL_LIST_TYPE.RECOMMENDED} />
            <ChannelsView type={CHANNEL_LIST_TYPE.CONTINUE} />
            <OfflineChannelListView />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Following;

export const styles = StyleSheet.create({
  title: {
    color: colors.textColor,
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 4,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.textColor,
  },
});
