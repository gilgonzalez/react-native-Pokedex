import { StackScreenProps, createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../screens/Home';
import Pokemon from '../screens/Pokemon';

import { NavigationContainer } from '@react-navigation/native';

export const enum StackScreens {
  HOME = 'Home',
  POKEMON = 'Pokemon',

}

export type RootStackParams = {
  [StackScreens.HOME] : { }
  [StackScreens.POKEMON] : { }

}

export type ScreenProps<T extends string> =
  T extends keyof RootStackParams
  ? StackScreenProps<RootStackParams, T>
  : never

const Stack = createStackNavigator<RootStackParams>();


const StackNavigation = () => {

  return (
    <NavigationContainer

    >
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {

          },
        }}
      >
        <Stack.Screen name={StackScreens.HOME} component={HomeScreen} />
        <Stack.Screen name={StackScreens.POKEMON} component={Pokemon} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
