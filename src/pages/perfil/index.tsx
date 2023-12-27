import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { styles } from './styles';

export default function Perfil({navigation}) {

  function handleLogout() {
    AsyncStorage.setItem('@id', '');
    navigation.navigate("Home");
  }

  return (
   <View style={styles.container}>
    <Text style={styles.title}>Perfil</Text>
    <TouchableOpacity onPress={handleLogout} style={styles.submit}>
      <Text style={styles.textSubmit}>Sair</Text>
    </TouchableOpacity>
   </View>
  );
}