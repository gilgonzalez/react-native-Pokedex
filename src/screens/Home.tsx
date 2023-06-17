import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { RootStackParams, StackScreens } from '../navigation/Navigator';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends StackScreenProps<RootStackParams, StackScreens.HOME> { }

const Home = ({ navigation} : Props ) => {
  return (
    <View>
      <Text>Home<Icon name="american-football-outline" size={50} color="black" /></Text>
      <Button title={'ir a detalle pokemon'} onPress={() => navigation.navigate(StackScreens.POKEMON, {})} />
    </View>
  );
};

export default Home;
