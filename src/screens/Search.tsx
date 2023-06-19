import React from 'react';
import { View, Platform, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SearchInput from '../components/SearchInput';

const Search = () => {

  const { top } = useSafeAreaInsets();


  return (
    <View style={[styles.container , {marginTop: Platform.OS === 'ios' ? top : top + 20}]}>
      <SearchInput/>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
});
