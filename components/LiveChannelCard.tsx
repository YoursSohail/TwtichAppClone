import React from 'react';
import {Image, Text, View} from 'react-native';
import {CHANNEL_LIST_TYPE} from '../screens/Following';
import {colors} from '../utils/colors';

const LiveChannelCard: React.FC<{type?: CHANNEL_LIST_TYPE}> = props => {
  return (
    <View style={{flexDirection: 'row', marginBottom: 20}}>
      <View>
        <Image
          source={{uri: 'https://picsum.photos/200/300'}}
          style={{width: 120, height: 80}}
        />
        <View
          style={{
            flexDirection: 'row',
            position: 'absolute',
            left: 2,
            bottom: 24,
            alignItems: 'center',
          }}>
          <View
            style={{
              width: 10,
              height: 10,
              backgroundColor: 'red',
              borderRadius: 5,
            }}
          />
          <Text
            style={{
              fontSize: 12,
              color: colors.textColor,
              fontWeight: 'bold',
              marginLeft: 4,
            }}>
            4.1K
          </Text>
        </View>
      </View>

      <View style={{marginHorizontal: 8}}>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              width: 20,
              height: 20,
              borderRadius: 10,
              backgroundColor: 'red',
            }}
          />
          <Text
            style={{
              color: colors.textColor,
              fontWeight: 'bold',
              marginLeft: 4,
            }}>
            tarik
          </Text>
        </View>
        <View style={{marginTop: 8}}>
          <Text style={{color: colors.textColor}}>
            FNATIC vs Leviatan | VCT Masters....
          </Text>
          <Text style={{marginTop: 8, color: colors.secondaryTextColor}}>
            VALORANT
          </Text>
          <Text
            style={{
              marginTop: 4,
              alignSelf: 'flex-start',
              color: colors.textColor,
              backgroundColor: '#323234',
              paddingVertical: 2,
              paddingHorizontal: 8,
              borderRadius: 8,
            }}>
            English
          </Text>
        </View>
      </View>
    </View>
  );
};

export default React.memo(LiveChannelCard);
