import {View, Text, StyleSheet, ScrollView, Pressable} from 'react-native';
import React, {useState} from 'react';
import TopBar from '../components/TopBar';
import {colors} from '../utils/colors';
import DiscoverVideoCards from '../components/DiscoverVideoCards';
import SmallCategoryCard from '../components/SmallCategoryCard';

const Browse: React.FC = () => {
  const [showLiveChannels, setLiveChannelsVisibility] = useState(false);
  return (
    <View style={styles().pageContainer}>
      <TopBar />
      <View
        style={{
          backgroundColor: colors.background,
        }}>
        <View style={{paddingHorizontal: 4}}>
          <Text style={styles().header}>Browse</Text>
        </View>
      </View>
      <View style={styles().listContainer}>
        <View style={{flexDirection: 'row'}}>
          <Pressable onPress={() => setLiveChannelsVisibility(false)}>
            <Text style={styles(!showLiveChannels).tabHeader}>Categories</Text>
          </Pressable>
          <Pressable onPress={() => setLiveChannelsVisibility(true)}>
            <Text style={styles(showLiveChannels).tabHeader}>
              Live Channels
            </Text>
          </Pressable>
        </View>
        <ScrollView>
          {!showLiveChannels && (
            <View style={styles().liveChannelsContainer}>
              <SmallCategoryCard />
              <SmallCategoryCard />
              <SmallCategoryCard />
            </View>
          )}

          {showLiveChannels && (
            <View style={{width: '100%'}}>
              <DiscoverVideoCards imageSize="large" showOptions={false} />
              <DiscoverVideoCards imageSize="large" showOptions={false} />
              <DiscoverVideoCards imageSize="large" showOptions={false} />
              <DiscoverVideoCards imageSize="large" showOptions={false} />
            </View>
          )}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = (showLiveChannels?: boolean) =>
  StyleSheet.create({
    pageContainer: {flex: 1, backgroundColor: colors.background},
    header: {
      fontSize: 30,
      color: colors.textColor,
      fontWeight: 'bold',
    },
    cardHeader: {
      color: colors.textColor,
      fontSize: 14,
      fontWeight: 'bold',
    },
    cardSubHeader: {
      color: colors.secondaryTextColor,
      fontSize: 12,
    },
    tabHeader: {
      color: showLiveChannels ? colors.brand : colors.textColor,
      padding: 8,
      fontWeight: 'bold',
      borderBottomWidth: showLiveChannels ? 1 : 0,
      borderColor: colors.brand,
    },
    liveChannelsContainer: {
      flex: 1,
      paddingHorizontal: 8,
      paddingVertical: 16,
    },
    listContainer: {backgroundColor: colors.background, flex: 1, marginTop: 8},
  });

export default Browse;
