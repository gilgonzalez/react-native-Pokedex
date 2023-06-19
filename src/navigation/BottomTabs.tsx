import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Search from '../screens/Search';
import  { StackScreens } from './Navigator';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../screens/Home';


const Tab = createBottomTabNavigator();



const BottomTabs = () => {


  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: '#999999',
        tabBarLabelStyle: {
         height:0,
        },
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: 'rgba(0, 150, 255, 0.92)',
          borderWidth: 0,
          elevation: 0,
          height: (Platform.OS === 'ios') ? 80 : 40,
          borderTopStartRadius: 1000,
          borderTopEndRadius: 1000,
        },
      }}
    >
      <Tab.Screen
        name={StackScreens.HOME}
        component={Home}
        options={{
          tabBarLabel: 'Listado',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({color }) => (
            <Icon color={color} size={ 25} name="list" />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Búsqueda',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({color }) => (
            <Icon color={color} size={ 25} name="search-outline" />
          ),
        }}
      />
      </Tab.Navigator>
  );
};
export default BottomTabs;
