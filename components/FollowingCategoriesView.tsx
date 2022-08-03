import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {colors} from '../utils/colors';
import CategoryCard from './CategoryCard';

const FollowingCategoriesView: React.FC = () => {
  return (
    <View style={{marginTop: 24}}>
      <Text style={styles.title}>Followed Categories</Text>
      <ScrollView horizontal style={{marginTop: 16}}>
        <CategoryCard />
        <CategoryCard />
      </ScrollView>
    </View>
  );
};

export default React.memo(FollowingCategoriesView);

const styles = StyleSheet.create({
  title: {
    color: colors.textColor,
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 4,
  },
});
