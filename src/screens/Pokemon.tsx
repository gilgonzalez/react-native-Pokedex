import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { RootStackParams, StackScreens } from '../navigation/Navigator';

interface Props extends StackScreenProps<RootStackParams, StackScreens.POKEMON> { }


const Pokemon = ({ navigation } : Props) => {
  return (
    <View>
      <Text>Pokemon</Text>
      <Button title={'Ir a Home'} onPress={() => navigation.navigate(StackScreens.HOME, {})} />

    </View>
  );
};

export default Pokemon;
