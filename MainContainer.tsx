import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Browse from './screens/Browse';
import Discover from './screens/Discover';
import Following from './screens/Following';
import Search from './screens/Search';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from './utils/colors';

const followingScreen = 'following';
const discoverScreen = 'discover';
const browseScreen = 'browse';
const searchScreen = 'search';

const Tab = createMaterialBottomTabNavigator();

const MainContainer = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        activeColor={colors.brandLight}
        inactiveColor={colors.textColor}
        shifting={false}
        initialRouteName={followingScreen}
        barStyle={{backgroundColor: colors.background}}>
        <Tab.Screen
          name={followingScreen}
          options={{
            tabBarLabel: 'Following',
            tabBarIcon: ({color}) => {
              return (
                <MaterialCommunityIcons
                  name={'heart'}
                  size={20}
                  color={color}
                />
              );
            },
          }}
          component={Following}
        />
        <Tab.Screen
          name={discoverScreen}
          options={{
            tabBarLabel: 'Discover',
            tabBarIcon: ({color}) => {
              return (
                <MaterialCommunityIcons
                  name={'compass'}
                  size={20}
                  color={color}
                />
              );
            },
          }}
          component={Discover}
        />
        <Tab.Screen
          name={browseScreen}
          options={{
            tabBarLabel: 'Browse',
            tabBarIcon: ({color}) => {
              return (
                <MaterialCommunityIcons
                  name={'content-copy'}
                  size={20}
                  color={color}
                />
              );
            },
          }}
          component={Browse}
        />
        <Tab.Screen
          name={searchScreen}
          options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({color}) => {
              return (
                <MaterialCommunityIcons
                  name={'magnify'}
                  size={20}
                  color={color}
                />
              );
            },
          }}
          component={Search}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default React.memo(MainContainer);
