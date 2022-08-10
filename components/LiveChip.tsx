import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../utils/colors';

const LiveChip = () => {
  return <Text style={styles.container}>LIVE</Text>;
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 4,
    paddingVertical: 2,
    fontSize: 10,
    position: 'absolute',
    top: 4,
    left: 4,
    zIndex: 1,
    fontWeight: 'bold',
    borderRadius: 4,
    alignSelf: 'flex-start',
    margin: 4,
    backgroundColor: colors.red,
    color: colors.textColor,
  },
});

export default LiveChip;
