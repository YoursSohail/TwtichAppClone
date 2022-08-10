import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../utils/colors';

const TagChip: React.FC<{text: string}> = props => {
  return <Text style={styles.textStyle}>{props.text}</Text>;
};

const styles = StyleSheet.create({
  textStyle: {
    marginTop: 4,
    backgroundColor: colors.cardBackground,
    alignSelf: 'flex-start',
    borderRadius: 8,
    fontSize: 12,
    paddingVertical: 2,
    paddingHorizontal: 4,
    color: colors.textColor,
  },
});

export default TagChip;
