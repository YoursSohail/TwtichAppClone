import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../utils/colors';

const ViewersChip: React.FC<{text: string}> = props => {
  return <Text style={styles.textStyle}>{props.text}</Text>;
};

const styles = StyleSheet.create({
  textStyle: {
    backgroundColor: colors.background,
    paddingVertical: 2,
    paddingHorizontal: 4,
    borderRadius: 4,
    position: 'absolute',
    bottom: 8,
    left: 8,
    color: colors.textColor,
  },
});

export default ViewersChip;
