import React, { useEffect } from 'react';
import { StyleProp, StyleSheet, TextInput, View, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useState} from 'react';
import useDebounce from '../hooks/useDebounce';

interface Props {
  style?: StyleProp<ViewStyle>
  onDebounce : (value:string)=>void;
}

const SearchInput = ({ style, onDebounce }: Props) => {

  const [search, setSearch] = useState('');
  const debounce = useDebounce(search, 700);


  useEffect(() => {
    onDebounce(debounce);
  },[debounce]);

  return (
    <View style={[styles.container, {...style as any}]}>
      <View style={ styles.inputBg}>
        <TextInput
          placeholder="Search"
          style={styles.textInput}
          autoCapitalize="none"
          autoCorrect={false}
          value={search}
          onChangeText={setSearch}
        />
        <Icon name="search-outline" color="gray" size={20} style={{marginLeft:10}}/>
      </View>
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
  },
  inputBg: {
    backgroundColor: '#f3f1f3',
    borderRadius: 50,
    height: 45,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: '#000',
shadowOffset: {
	width: 0,
	height: 5,
},
shadowOpacity: 0.34,
shadowRadius: 6.27,

elevation: 10,
  },
  textInput: {
    flex: 1,
    fontSize:18,
  },

});
