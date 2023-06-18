import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Dimensions, StyleSheet, Text, View, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { RootStackParams, StackScreens } from '../navigation/Navigator';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FadeInImage } from '../components/FadeInImage';
import usePokemon from '../hooks/usePokemon';
import PokemonDetails from '../components/PokemonDetails';
import AutoHeightImage from 'react-native-auto-height-image';

interface Props extends StackScreenProps<RootStackParams, StackScreens.POKEMON> { }

const height = Dimensions.get('window').height;


const Pokemon = ({ navigation, route }: Props) => {
  const { top } = useSafeAreaInsets();
  const { pokemon: { name, id, picture }, color } = route.params;
  const { pokemon, isLoading } = usePokemon({ id });
  const uriGif = `https://projectpokemon.org/images/normal-sprite/${name === 'mr-mime' ? 'mr.mime' : name}.gif`;
  return (
    <View style={{ flex: 1 }}>
      <View
        style={[styles.bgHeader, { backgroundColor: color }]}
      >
        <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.backButton, { top: top + 10 }]}
          onPress={() => navigation.pop()}
        >
          <Icon name="chevron-back-circle-outline" size={30} color="white" />
        </TouchableOpacity>
        <View
          style={{ position:'absolute',left:60, top: top + 140, zIndex:2}}
        >
          <AutoHeightImage
            width={75}
            source={{uri:uriGif}}
          />
        </View>
        <Text
          style={ [styles.pokemonName, { top: top + height * 0.05 }] }
        >{name.charAt(0).toUpperCase() + name.slice(1) + '\n'} # {id}</Text>
        <Image
          source={require('../assets/pokebola-blanca.png')}
          style={styles.pokeball}
        />

        <FadeInImage
          uri={picture}
          style={styles.pokemonImage}
        />
      </View>
      {
        isLoading
          ? (<View
            style={[styles.loadingIndicator, { }]}
          >
            <ActivityIndicator
              color={color}
              size={50}
            />
          </View>)
          : (
            <PokemonDetails pokemon={pokemon} color={color}/>
          )
      }
    </View>
  );
};

export default Pokemon;

const styles = StyleSheet.create({
  bgHeader: {
    height: height * 0.4,
    zIndex: 999,
    borderBottomEndRadius: 1000,
    borderBottomStartRadius: 1000,
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    left: 20,
  },
  pokemonName: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: 30,
    alignSelf: 'flex-start',
    fontFamily: 'PokemonSolid',
    left: 20,
    letterSpacing:7,
  },
  pokeball: {
    width: 250,
    height: 250,
    opacity: 0.7,
  },
  pokemonImage: {
    width: 225,
    height: 225,
    position: 'absolute',
    top: 60,
    right: 0,
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
