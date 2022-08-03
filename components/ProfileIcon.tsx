import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../utils/colors';

const ProfileIcon = () => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name={'account-outline'}
        color={colors.textColor}
        size={22}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.pinkBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProfileIcon;
