import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../utils/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const StreamCategoryCard: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: colors.textColor, fontWeight: 'bold'}}>Games</Text>
      <MaterialCommunityIcons
        name={'gamepad-square-outline'}
        color={colors.textColor}
        size={22}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    padding: 8,
    width: 150,
    marginRight: 8,
    justifyContent: 'space-between',
    backgroundColor: colors.brand,
    flexDirection: 'row',
  },
});

export default StreamCategoryCard;
