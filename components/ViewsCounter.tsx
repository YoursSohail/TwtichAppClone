import {
  View,
  Text,
  StyleSheet,
  StyleProp,
  ViewProps,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {colors} from '../utils/colors';

const ViewsCounter: React.FC<{containerStyle?: ViewStyle}> = props => {
  return (
    <View style={[styles.viewsContainer, props.containerStyle]}>
      <View style={styles.redDot} />
      <Text style={styles.view}>4.1K</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewsContainer: {
    flexDirection: 'row',
    position: 'absolute',
    left: 2,
    bottom: 24,
    alignItems: 'center',
  },
  redDot: {
    width: 10,
    height: 10,
    backgroundColor: 'red',
    borderRadius: 5,
  },
  view: {
    fontSize: 12,
    color: colors.textColor,
    fontWeight: 'bold',
    marginLeft: 4,
  },
});

export default ViewsCounter;
