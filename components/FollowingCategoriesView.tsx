import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {styles} from '../screens/Following';
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
