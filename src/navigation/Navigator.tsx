import { StackScreenProps, createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Pokemon from '../screens/Pokemon';

import { PokemonBasic } from '../interfaces/pokemon';
import BottomTabs from './BottomTabs';

export const enum StackScreens {
  HOME = 'Home',
  POKEMON = 'Pokemon',
  TABSCREEN = 'TabScreen'

}

export type RootStackParams = {
  [StackScreens.HOME] : { }
  [StackScreens.POKEMON]: { pokemon: PokemonBasic, color: string }
  [StackScreens.TABSCREEN]: {}
}

export type ScreenProps<T extends string> =
  T extends keyof RootStackParams
  ? StackScreenProps<RootStackParams, T>
  : never

const Stack = createStackNavigator<RootStackParams>();


const StackNavigation = () => {

  return (

      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {
          },
        }}
      >
      <Stack.Screen name={StackScreens.TABSCREEN} component={BottomTabs} />
      <Stack.Screen name={StackScreens.POKEMON} component={Pokemon}  />
      </Stack.Navigator>
  );
};

export default StackNavigation;
