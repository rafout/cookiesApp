import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import Mainstack from './src/navigator/Mainstack';

export default function App() {

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#000" barStyle='light-content' />
      <Mainstack />
    </NavigationContainer>
  );
}
