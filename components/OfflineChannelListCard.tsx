import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {colors} from '../utils/colors';

const OfflineChannelListCard: React.FC = () => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 8}}>
      <Image
        source={{uri: 'https://picsum.photos/200/300'}}
        style={styles.image}
      />
      <View style={{marginLeft: 8}}>
        <Text style={styles.cardTitle}>sinatraa</Text>
        <Text style={{color: colors.secondaryTextColor}}>17 new videos</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.textColor,
  },
});

export default React.memo(OfflineChannelListCard);
