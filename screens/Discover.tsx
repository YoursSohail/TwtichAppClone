import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import TopBar from '../components/TopBar';
import {colors} from '../utils/colors';
import ViewsCounter from '../components/ViewsCounter';
import LiveStreamDescription from '../components/LiveStreamDescription';
import StreamCategoryCard from '../components/StreamCategoryCard';
import DiscoverVideoCards from '../components/DiscoverVideoCards';
import CategoryLike from '../components/CategoryLike';
import LiveChip from '../components/LiveChip';
import ViewersChip from '../components/ViewersChip';

interface SuggestionVideo {
  id: number;
  thumbnail: string;
  views: string;
  channel: string;
  video: string;
  tags: string[];
}

const suggestionVideos: SuggestionVideo[] = [
  {
    id: 0,
    thumbnail: 'https://picsum.photos/200/300',
    views: '4.5k',
    channel: 'tarik',
    video: 'Valorant',
    tags: ['Competitive', 'FPS'],
  },
  {
    id: 1,
    thumbnail: 'https://picsum.photos/200/300',
    views: '4.5k',
    channel: 'shroud',
    video: 'Valorant',
    tags: ['Competitive', 'FPS'],
  },
  {
    id: 2,
    thumbnail: 'https://picsum.photos/200/300',
    views: '4.5k',
    channel: 'sinatraa',
    video: 'Valorant',
    tags: ['Competitive', 'FPS'],
  },
  {
    id: 3,
    thumbnail: 'https://picsum.photos/200/300',
    views: '4.5k',
    channel: 'subroza',
    video: 'Valorant',
    tags: ['Competitive', 'FPS'],
  },
];

const SuggestionVideoCard: React.FC<{video: SuggestionVideo}> = props => {
  const {video} = props;
  return (
    <View
      style={{width: 250, height: 150, borderRadius: 4, marginHorizontal: 4}}>
      <View>
        <LiveChip />
        <Image
          style={{width: 250, height: 150, borderRadius: 4}}
          source={{uri: video.thumbnail}}
        />
        <ViewersChip text={`${video.views} Viewers`} />
      </View>
    </View>
  );
};

const Discover = () => {
  return (
    <View style={{flex: 1}}>
      <TopBar />
      <View
        style={{
          backgroundColor: colors.background,
        }}>
        <View style={{paddingHorizontal: 4}}>
          <Text style={styles.header}>Discover</Text>
        </View>
      </View>
      <ScrollView>
        <View>
          <View>
            <FlatList
              showsHorizontalScrollIndicator={false}
              style={styles.flatList}
              horizontal
              data={suggestionVideos}
              renderItem={item => <SuggestionVideoCard video={item.item} />}
            />
          </View>

          {/* current stream description */}
          <View style={styles.streamDescriptionView}>
            <LiveStreamDescription />
            {/* stream categories chips */}
            <View>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.categoryRow}>
                  <StreamCategoryCard />
                  <StreamCategoryCard />
                  <StreamCategoryCard />
                  <StreamCategoryCard />
                </View>
              </ScrollView>
            </View>

            {/* Live channels */}
            <View style={{marginTop: 18}}>
              <DiscoverVideoCards
                header={
                  <Text style={styles.cardHeader}>
                    LIVE CHANNELS WE THINK YOU'LL LIKE
                  </Text>
                }
              />
            </View>

            {/* Categories to like */}
            <CategoryLike />
            {/* Recommended smaller communities */}
            <DiscoverVideoCards
              header={
                <Text style={styles.cardHeader}>
                  RECOMMENDED SMALLER COMMUNITIES
                </Text>
              }
            />
            {/* Recommended Valorant Channels */}
            <DiscoverVideoCards
              header={
                <Text style={styles.cardHeader}>
                  RECOMMENDED{' '}
                  <Text style={{color: colors.brand}}>VALORANT </Text>
                  CHANNELS
                </Text>
              }
            />
            {/* All aboard the hype train */}
            <DiscoverVideoCards
              header={
                <Text style={styles.cardHeader}>ALL ABOARD THE HYPE TRAIN</Text>
              }
            />
            {/* Clips we think you'll like  */}
            <DiscoverVideoCards
              header={
                <Text style={styles.cardHeader}>
                  CLIPS WE THINK YOU'LL LIKE
                </Text>
              }
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    color: colors.textColor,
    fontWeight: 'bold',
  },
  cardHeader: {
    color: colors.secondaryTextColor,
    fontSize: 14,
    fontWeight: 'bold',
  },
  flatList: {
    backgroundColor: colors.background,
    paddingVertical: 8,
  },
  streamDescriptionView: {
    flex: 1,
    backgroundColor: colors.background,
  },
  categoryRow: {
    flexDirection: 'row',
    marginTop: 12,
  },
});

export default Discover;
