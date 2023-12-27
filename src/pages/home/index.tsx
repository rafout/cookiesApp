import React, { useState } from 'react';
import { KeyboardAvoidingView, View, TouchableOpacity, Text, TextInput, Image } from 'react-native';
import service from '../../services';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { styles } from './styles';

export default function Home({ navigation }) {

    const [credential, setCredential] = React.useState('');

    function handleEntrar(): void {
      if(credential.length === 0) {
        alert("Digite uma credencial!");
      } else {
        service
        .sendCredential()
        .then((response) => {
          console.log(response);
          AsyncStorage.setItem('@id', JSON.stringify(response.id));
          AsyncStorage.setItem('@name', credential);
          setCredential('');
          navigation.navigate("Menu");
        })
        .catch((error) => {
          alert("Ocorreu um erro ao enviar a credencial.")
          console.log(error);
        });
      }
    }

    return (
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.viewInfo}>
          <Text style={styles.welcome}>Olá, seja bem-vindo!</Text>
          <Text style={styles.about}>Esse aplicativo suporta o envio de pedidos para a produção e o monitoramento do estoque de cada ingrediente.</Text>
          <Text style={styles.about}>Para iniciar a produção e obter o relatório da mesma deve-se utilizar o sistema principal.</Text>
        </View>
        <View style={styles.login}>
          <Text style={styles.info}>Coloque sua credencial abaixo para acessar o sistema.</Text>
          <TextInput
            style={styles.input}
            onChangeText={(t) => {setCredential(t)}}
            value={credential}
            placeholder="Digite sua credencial..."
          />
          <TouchableOpacity onPress={handleEntrar} style={styles.submit}>
            <Text style={styles.textSubmit}>Entrar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewLogo}>
          <Image
            style={styles.logo}
            source={require('../../assets/img/favicon.png')}
          />
          <Text style={styles.info}>Sweet & Cookie Co</Text>
        </View>
      </KeyboardAvoidingView>
    );
}