import React from 'react';
import { View, ActivityIndicator, Text } from 'react-native';

const Loader = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size={50} color={'gray'} />
        <Text>Cargando...</Text>
      </View>
  );
};

export default Loader;
