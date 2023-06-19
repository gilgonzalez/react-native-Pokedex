import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { FlatList, Image, View} from 'react-native';
import { RootStackParams, StackScreens } from '../navigation/Navigator';
import { styles } from '../theme/AppTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import { ActivityIndicator } from 'react-native';
import PokemonCard from '../components/PokemonCard';

interface Props extends StackScreenProps<RootStackParams, StackScreens.HOME> { }

const Home = () => {
  const { top } = useSafeAreaInsets();

  const { basicPokemon,  loadPokemons } = usePokemonPaginated();

  return (
    <>
      <Image
        source={require('../assets/pokebola.png')}
        style={styles.bgPokeball}
      />
      <View
        style={ {alignItems: 'center'}}
      >
        <FlatList
          data={basicPokemon}
          renderItem={({ item }) => <PokemonCard pokemon={item} />}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          keyExtractor={(pokemon) => pokemon.id}
          onEndReached={loadPokemons}
          onEndReachedThreshold={0.4}
          ListFooterComponent={<ActivityIndicator style={{ height: 100 }} size={20} color="grey" />}
          ListHeaderComponent={<Image
            source={require('../assets/pokedex-logo.png')}
            style={[styles.logo, { top: top + 20 }]}
          />}
        />
      </View>

      {/* <Button title={'ir a detalle pokemon'} onPress={() => navigation.navigate(StackScreens.POKEMON, {})} /> */}
    </>
  );
};

export default Home;
