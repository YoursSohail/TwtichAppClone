import {View, Text, Image} from 'react-native';
import React from 'react';
import {colors} from '../utils/colors';

const CategoryLike = () => {
  return (
    <View style={{marginTop: 18}}>
      <Text style={{color: colors.secondaryTextColor, fontWeight: 'bold'}}>
        <Text style={{color: colors.brand, fontWeight: 'bold'}}>
          CATEGORIES{' '}
        </Text>
        WE THINK YOU'LL LIKE
      </Text>
      <View style={{flexDirection: 'row'}}>
        <View style={{marginTop: 8}}>
          <Image
            source={{uri: 'https://picsum.photos/200/300'}}
            style={{width: 100, height: 120}}
          />
          <Text
            style={{
              color: colors.textColor,
              fontWeight: 'bold',
            }}>
            VALORANT
          </Text>
          <Text style={{color: colors.secondaryTextColor}}>231.4K Viewers</Text>
          <Text
            style={{
              marginTop: 4,
              paddingVertical: 2,
              fontSize: 12,
              paddingHorizontal: 4,
              alignSelf: 'flex-start',
              borderRadius: 8,
              backgroundColor: colors.cardBackground,
              color: colors.textColor,
            }}>
            Shooter
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CategoryLike;
