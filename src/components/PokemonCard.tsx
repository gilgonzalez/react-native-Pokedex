import React, { useEffect, useState } from 'react';
import { PokemonBasic } from '../interfaces/pokemon';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import { FadeInImage } from './FadeInImage';
import { getColors } from 'react-native-image-colors';
import { useRef } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParams, StackScreens } from '../navigation/Navigator';

interface Props {

  pokemon: PokemonBasic
}

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const PokemonCard = ({ pokemon }: Props) => {

  const [bgColor, setBgColor] = useState('green');
  const isMounted = useRef(true);
  const { navigate } = useNavigation<NavigationProp<RootStackParams>>();

  useEffect(() => {
    getColors(pokemon.picture, {
      fallback: bgColor,
      cache: true,
      key: pokemon.picture,
    }).then(colors => {
      if (!isMounted.current) {return;}
      (
        colors.platform === 'android'
          ? setBgColor(colors.dominant || '#212121')
          : colors.platform === 'ios'
            ? setBgColor(colors.background || '#212121')
            : setBgColor('#212121')
      );
    }
    );
    return () => {
      isMounted.current = false;
    };
  }, []);
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigate(StackScreens.POKEMON, {pokemon, color :bgColor})}
    >
      <View
        style={{
          ...styles.cardContainer,
          backgroundColor: bgColor,
        }}
      >
        <Text style={[styles.name, {fontFamily:'PokemonSolid'}]}>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)} {'\n\n#' + pokemon.id}</Text>
        <FadeInImage
          uri={pokemon.picture}
          style={styles.pokemonImage}
        />
        <View
          style={styles.containerPokeball}
        >
          <Image
            source={require('../assets/pokebola-blanca.png')}
            style={styles.pokeball}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PokemonCard;

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    height: height * 0.15,
    width: width * 0.4,
    marginBottom: 23,
    borderRadius: 10,
    shadowColor: '#212121',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 3,

    elevation: 8,
  },
  name: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: 16,
    letterSpacing:4,
    //fontWeight: 'bold',
    top: 20,
    left: 10,
  },
  containerPokeball: {
    position: 'absolute',
    height: 100,
    width: 100,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
  },
  pokeball: {
    width: 100,
    height: 100,
    position: 'absolute',
    right: -15,
    bottom: -20,
    opacity: 0.6,
  },
  pokemonImage: {
    width: 120,
    height: 120,
    position: 'absolute',
    right: -5,
    bottom: -10,
    zIndex: 999,
  },
});
