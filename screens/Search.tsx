import {View, Text, Pressable, StyleSheet, TextInput} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../utils/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Search = () => {
  const [showCross, setCrossVisibility] = useState(false);
  return (
    <View style={styles.pageContainer}>
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <MaterialCommunityIcons
            name={'chevron-left'}
            color={colors.textColor}
            size={24}
          />
          <TextInput
            style={styles.input}
            placeholder="Search..."
            onChangeText={text =>
              text.length > 0
                ? setCrossVisibility(true)
                : setCrossVisibility(false)
            }
            placeholderTextColor={colors.textColor}
          />
        </View>

        {showCross && (
          <Pressable style={{marginTop: -12}}>
            <MaterialCommunityIcons
              name={'close-circle'}
              color={colors.textColor}
              size={20}
            />
          </Pressable>
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    marginTop: -12,
    marginLeft: 24,
    color: colors.textColor,
    padding: 10,
  },
  pageContainer: {flex: 1, backgroundColor: colors.background},
  container: {
    flexDirection: 'row',
    margin: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default Search;
