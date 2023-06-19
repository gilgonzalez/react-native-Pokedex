import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchInput = () => {
  return (
    <View style={ styles.container}>
      <View style={ styles.inputBg}>
        <TextInput
          placeholder="Search"
          style={styles.textInput}
          autoCapitalize="none"
          autoCorrect={false}
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
