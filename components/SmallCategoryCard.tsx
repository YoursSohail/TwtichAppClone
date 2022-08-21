import {View, Image, Text, StyleSheet} from 'react-native';
import {colors} from '../utils/colors';
import TagChip from './TagChip';
import React from 'react';

const SmallCategoryCard: React.FC = () => {
  return (
    <View style={{flexDirection: 'row', marginTop: 12}}>
      <Image
        source={{uri: 'https://picsum.photos/200/300'}}
        style={{width: 70, height: 90}}
      />
      <View style={{padding: 8}}>
        <Text style={styles.cardHeader}>VALORANT</Text>
        <Text style={styles.cardSubHeader}>136.7K Viewers</Text>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <View style={{marginRight: 8}}>
            <TagChip text="Shooter" />
          </View>
          <TagChip text="FPS" />
        </View>
      </View>
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
    color: colors.textColor,
    fontSize: 14,
    fontWeight: 'bold',
  },
  cardSubHeader: {
    color: colors.secondaryTextColor,
    fontSize: 12,
  },
});
export default SmallCategoryCard;
