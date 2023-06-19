import React, { useEffect, useState } from 'react';
import { View, Platform, StyleSheet, Text, FlatList, Dimensions, Image, ImageBackground, ScrollView, KeyboardAvoidingView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SearchInput from '../components/SearchInput';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import PokemonCard from '../components/PokemonCard';
import Loader from '../components/Loader';
import { PokemonBasic } from '../interfaces/pokemon';
import { styles as globalStyles } from '../theme/AppTheme';

const width = Dimensions.get('window').width;

const Search = () => {

  const { top } = useSafeAreaInsets();
  const { isFetching, basicPokemon } = usePokemonSearch();
  const [term, setTerm] = useState('');
  const [pokemonFiltered, setPokemonFiltered] = useState<PokemonBasic[]>([]);

  useEffect(() => {
    if (term.length === 0) {return setPokemonFiltered([]);}
    if (term.length > 0) {
      if (isNaN(Number(term))) {
        setPokemonFiltered(basicPokemon.filter(pokemon => pokemon.name.includes(term.toLocaleLowerCase())));
      } else {
        const pokemonById = basicPokemon.find( pokemon => pokemon.id === term);
        setPokemonFiltered(
          (pokemonById) ? [pokemonById] : []
        );
      }
    }
  }, [term]);

  if (isFetching) {
    return (
      <Loader/>
      );
    }

  return (
    <KeyboardAvoidingView style={[styles.container]}>

      <ImageBackground source={require('../assets/pokedex.jpg')} resizeMode="stretch" style={styles.image}>
      <SearchInput
        onDebounce={(value)=>setTerm(value) }
        style={{
          position: 'absolute',
          width: width - 40,
          zIndex: 999,
          top: 150,
          marginHorizontal: 20,

        }}
        />
        <View
          style={{
            backgroundColor: 'blue',
            height: 350,
            width: width - 80,
            position: 'relative',
            top: 50,
            borderWidth: 2,
            borderColor: 'white',
            borderRadius: 20,
          } }
        >

          <FlatList
          style={{alignSelf:'center'}}
          data={pokemonFiltered}
          renderItem={({ item }) => <PokemonCard pokemon={item} />}
          numColumns={1}
          showsVerticalScrollIndicator={false}
          keyExtractor={(pokemon) => pokemon.id}
          ListHeaderComponent={
            <Text style={{
              marginTop: Platform.OS === 'ios' ? top + 60 : top + 100,
              marginBottom: 20,
              fontSize: 25,
              fontWeight: 'bold',
              color: '#212121',
            }} />}
          />
        </View>
    </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
  },
});
