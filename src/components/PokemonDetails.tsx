import React from 'react';
import { ScrollView, Text, View, StyleSheet, Dimensions, FlatList } from 'react-native';
import { PokemonFull } from '../interfaces/pokemon';
import { colourType } from '../types/types';
import Icon from 'react-native-vector-icons/Ionicons';
import { FadeInImage } from './FadeInImage';

interface Props {

  pokemon: PokemonFull
  color: string
}

const height = Dimensions.get('window').height;

const PokemonDetails = ({ pokemon, color }: Props) => {



  return (
    <ScrollView
      style={{
        ...StyleSheet.absoluteFillObject,
      }}
    >

      <View
        style={[styles.container,{marginTop : height * 0.45}]}
      >
        <View
          style={{
          ...styles.container,
          flexDirection: 'row',
          alignItems: 'center',
            justifyContent: 'space-around',
          marginBottom: 20,
        }}
      >
        <View
          style={{flexDirection: 'row', gap:10}}
        >
          <Icon name="barbell-outline" size={30} color={'#212121'} />
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}> {pokemon.weight / 10} kg</Text>
        </View>
        <View
          style={{flexDirection: 'row', gap:10}}
        >
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}> 📏</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}> {pokemon.height / 10} m</Text>
        </View>
      </View>
        <Text style={styles.title}>Types </Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginTop: 10 }}>
          {
            pokemon.types.map(({ type }, index) => (

              <View
                key={index}
                style={[styles.typeContainer,{backgroundColor: colourType[type.name]}]}
              >
                <Text style={[styles.innerText]}>{type.name.charAt(0).toUpperCase() + type.name.slice(1)}</Text>
              </View>

            ))
         }
        </View>

      </View>
      <View
        style={{
          ...styles.container, marginTop: 20,
        }}
      >
        <Text style={styles.title}> Sprites</Text>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <FadeInImage
          uri={pokemon.sprites.front_default}
          style={ styles.basicSprite}
        />
        <FadeInImage
          uri={pokemon.sprites.back_default}
          style={ styles.basicSprite}
        />
        <FadeInImage
          uri={ pokemon.sprites.front_shiny}
          style={ styles.basicSprite}
        />
        <FadeInImage
          uri={ pokemon.sprites.back_shiny}
          style={ styles.basicSprite}
        />

      </ScrollView>
    </ScrollView>
  );
};

export default PokemonDetails;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  typeContainer: {
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  innerText: {
    fontSize: 16,
    color: 'white',
  },
  basicSprite: {
    width: 100,
    height: 100,
  },
});
