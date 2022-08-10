import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../utils/colors';

const LiveStreamDescription = () => {
  return (
    <View>
      <View style={{marginLeft: 4}}>
        <Text style={{color: colors.textColor}}>
          <Text style={styles.boldText}>Shroud </Text>
          streaming <Text style={styles.boldText}>Valorant</Text>
        </Text>
        <View style={styles.rowContainer}>
          <Text style={styles.chipText}>Competitve</Text>
          <Text style={styles.chipText}>FPS</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rowContainer: {flexDirection: 'row', display: 'flex', marginTop: 4},
  chipText: {
    borderRadius: 8,
    paddingVertical: 2,
    color: colors.textColor,
    fontSize: 12,
    marginRight: 8,
    paddingHorizontal: 8,
    backgroundColor: colors.cardBackground,
  },
  boldText: {color: colors.textColor, fontWeight: 'bold'},
});

export default LiveStreamDescription;
