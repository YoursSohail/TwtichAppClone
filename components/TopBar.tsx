import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import ProfileIcon from './ProfileIcon';
import {colors} from '../utils/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const TopBar = () => {
  return (
    <View style={styles.container}>
      <ProfileIcon />
      <View>
        <View style={styles.rowContainer}>
          <MaterialCommunityIcons
            name={'inbox'}
            color={colors.textColor}
            size={22}
          />
          <MaterialCommunityIcons
            name={'comment'}
            color={colors.textColor}
            size={22}
            style={{marginLeft: 8}}
          />
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons
              name={'radio-tower'}
              size={20}
              color={colors.textColor}
            />
            <Text style={styles.text}>Create</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 8,
    paddingHorizontal: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.background,
    alignItems: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    backgroundColor: colors.cardBackground,
    padding: 12,
    marginLeft: 8,
    borderRadius: 20,
    alignItems: 'center',
  },
  text: {
    marginLeft: 8,
    color: colors.textColor,
    fontWeight: 'bold',
  },
});
