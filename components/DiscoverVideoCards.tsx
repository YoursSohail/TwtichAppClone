import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../utils/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LiveChip from './LiveChip';
import TagChip from './TagChip';
import ViewersChip from './ViewersChip';

const DiscoverVideoCards: React.FC<{header: JSX.Element}> = props => {
  return (
    <View style={{marginTop: 16}}>
      {props.header}
      <View style={{flexDirection: 'row', marginTop: 8}}>
        <View>
          <View>
            <Image
              source={{uri: 'https://picsum.photos/200/300'}}
              style={{height: 180, width: 300}}
            />
            <LiveChip />
            <ViewersChip text="1.5K Viewers" />
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
              justifyContent: 'space-between',
            }}>
            <Image
              source={{uri: 'https://picsum.photos/200/300'}}
              style={{width: 50, height: 50, borderRadius: 25}}
            />
            <View style={{marginLeft: 8}}>
              <Text style={styles.channelText}>AverageJonas</Text>
              <Text style={{color: colors.textColor, fontSize: 12}}>
                VCT Masters Copenhegan Watch Party
              </Text>
              <TagChip text="English" />
            </View>
            <MaterialCommunityIcons
              name={'dots-vertical'}
              color={colors.textColor}
              size={22}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  channelText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: colors.textColor,
  },
});

export default DiscoverVideoCards;
