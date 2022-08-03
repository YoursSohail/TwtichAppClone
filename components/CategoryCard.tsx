import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {colors} from '../utils/colors';

const CategoryCard: React.FC = () => {
  return (
    <View style={{marginRight: 12}}>
      <Image
        source={{uri: 'https://picsum.photos/200/300'}}
        style={{width: 100, height: 120}}
      />
      <Text style={styles.cardTitle}>VALORANT</Text>
      <View style={{flexDirection: 'row', marginTop: 4, alignItems: 'center'}}>
        <View style={styles.redDot} />
        <Text style={styles.views}>333.5K</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.textColor,
  },
  redDot: {
    width: 12,
    height: 12,
    borderRadius: 10,
    backgroundColor: colors.red,
  },
  views: {
    color: colors.secondaryTextColor,
    fontSize: 16,
    marginLeft: 4,
  },
});

export default React.memo(CategoryCard);
