import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/navigation/Navigator';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <StackNavigation/>
      </NavigationContainer>
      {/* <StackNavigation/> */}
    </>
  );
};

export default App;
