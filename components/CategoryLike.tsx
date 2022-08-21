import {View, Text, Image} from 'react-native';
import React from 'react';
import {colors} from '../utils/colors';
import TagChip from './TagChip';

const CategoryLike: React.FC = () => {
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
          <TagChip text="Shooter" />
        </View>
      </View>
    </View>
  );
};

export default CategoryLike;
