import React from 'react';
import { ScrollView, Text, View, StyleSheet, Dimensions } from 'react-native';
import { PokemonFull } from '../interfaces/pokemon';
import { colourType } from '../types/types';
import Icon from 'react-native-vector-icons/Ionicons';
import { FadeInImage } from './FadeInImage';
import Movement from './Movement';
import Stats from './Stats';

interface Props {

  pokemon: PokemonFull
  color: string
}

const height = Dimensions.get('window').height;

const PokemonDetails = ({ pokemon, color }: Props) => {

  const levels = Array.from(
    new Set(
      pokemon.moves.map(move => move.version_group_details[0].level_learned_at))).sort((a, b) => a - b);

  const moveList = pokemon.moves.map(move => {
    return {
      name: move.move.name,
      level: move.version_group_details[0].level_learned_at,
    };
  }).sort((a, b) => a.level - b.level);

  return (
    <ScrollView
      style={{
        ...StyleSheet.absoluteFillObject,
      }}
    >

      <View
        style={[styles.container, { marginTop: height * 0.45 }]}
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
            style={{ flexDirection: 'row', gap: 10 }}
          >
            <Icon name="barbell-outline" size={30} color={'#212121'} />
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}> {pokemon.weight / 10} kg</Text>
          </View>
          <View
            style={{ flexDirection: 'row', gap: 10 }}
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
                style={[styles.typeContainer, { backgroundColor: colourType[type.name] }]}
              >
                <Text style={[styles.innerText]}>{type.name.charAt(0).toUpperCase() + type.name.slice(1)}</Text>
              </View>

            ))
          }
        </View>

        <Text style={styles.title}> Sprites</Text>

        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <FadeInImage
            uri={pokemon.sprites.front_default}
            style={styles.basicSprite}
          />
          <FadeInImage
            uri={pokemon.sprites.back_default}
            style={styles.basicSprite}
          />
          <FadeInImage
            uri={pokemon.sprites.front_shiny}
            style={styles.basicSprite}
          />
          <FadeInImage
            uri={pokemon.sprites.back_shiny}
            style={styles.basicSprite}
          />
        </ScrollView>
        <Text style={[styles.title]}>Stats </Text>
        <View style={{ flexWrap: 'wrap', gap: 10, marginTop: 10 }}>
          {
            pokemon.stats.map((stat, index) => (
              <Stats stat={stat} key={index} />
            ))
          }
        </View>
        <Text style={[styles.title]}>Habilities </Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginTop: 10 }}>
          {
            pokemon.abilities.map(({ ability }, index) => (
              <View
                key={index}
                style={[styles.typeContainer, { backgroundColor: color }]}
              >
                <Text style={[styles.innerText]}>{ability.name.charAt(0).toUpperCase() + ability.name.slice(1)}</Text>
              </View>

            ))
          }
        </View>
        <Text style={[styles.title]}>Moves </Text>
        <View style={{  gap: 10, marginTop: 10 }} >

          {
            levels.map(level => (
              <>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Level {level}</Text>
              <View style={{flexDirection:'row', flexWrap: 'wrap', gap: 10}}>
                {
                  moveList.filter(move => move.level === level).map(({ name }, index) => (
                    <Movement key={index} name={name} level={ level} />
                    ))}

              </View>
              </>
            ))
          }

        </View>
      </View>
      <View style={ {height: 50}} />
    </ScrollView>
  );
};

export default PokemonDetails;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    gap: 10,
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
