import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, View, TouchableOpacity, Text, TextInput, ActivityIndicator } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';

import service from '../../services';
import { styles } from './styles';

export default function Pedido() {

  const [loading, setLoading] = useState(false);

  const [ingrediente1, setIngrediente1] = useState("");
  const [ingrediente2, setIngrediente2] = useState("");
  const [ingrediente3, setIngrediente3] = useState("");
    
  const [radioButtons, setRadioButtons] = useState([
    {
        id: '1', 
        label: 'Simples',
        value: false,
        selected: true,
        color: '#2D4468',
        labelStyle: { color: '#2D4468', fontSize: 16, fontWeight: 'bold' }
    },
    {
        id: '2',
        label: 'Recheado',
        value: true,
        selected: false,
        color: '#2D4468',
        labelStyle: { color: '#2D4468', fontSize: 16, fontWeight: 'bold' }
    }
  ]);

  function selectType(radioButtonsArray) {
    setRadioButtons(radioButtonsArray);
  }

  function getFilling() {
    const selectedFilling = radioButtons.find(filling => filling.selected);

    if (selectedFilling) {
      return selectedFilling.value;
    }
  
    return null;
  }

  function handleSubmit() {
    setLoading(true);
    let filling = getFilling();

    if (!isNaN(ingrediente1) && parseInt(ingrediente1) > 0 && !isNaN(ingrediente2) && parseInt(ingrediente2) > 0 && !isNaN(ingrediente3) && parseInt(ingrediente3) > 0 && filling != null) {
      service
      .sendRequestCookie(parseInt(ingrediente1), parseInt(ingrediente2), parseInt(ingrediente3), filling)
      .then((response) => {
          setLoading(false);
          clearCookie();
          alert("Pedido enviado com sucesso!");
      })
      .catch((error) => {
          setLoading(false);
          clearCookie();
          console.log(error);
          alert("Ocorreu um erro ao enviar o pedido, verifique o estoque e a conexão e tente novamente!");
        });
    } else {
      alert("Verifique se todos ingredientes estão preenchidos e são numeros válidos.")
    }
  }

  function clearCookie() {
    setIngrediente1("");
    setIngrediente2("");
    setIngrediente3("");
  }

    return (
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Cadastro de Pedidos</Text>
        </View>
        <View style={styles.viewInputs}>
          <View style={styles.viewIngredient}>
            <Text style={styles.textIngredient}>Tipo:</Text>
            <RadioGroup 
                radioButtons={radioButtons} 
                onPress={selectType} 
                layout="row"
            />
          </View>

          <View style={styles.viewIngredient}>
            <Text style={styles.textIngredient}>Ingrediente 1:</Text>
            <TextInput
                style={styles.input}
                onChangeText={(t) => {setIngrediente1(t)}}
                value={ingrediente1}
                placeholder="Ingrediente 1"
                placeholderTextColor="#2D4468"
            />
          </View>

          <View style={styles.viewIngredient}>
            <Text style={styles.textIngredient}>Ingrediente 2:</Text>
            <TextInput
                style={styles.input}
                onChangeText={(t) => {setIngrediente2(t)}}
                value={ingrediente2}
                placeholder="Ingrediente 2"
                placeholderTextColor="#2D4468"
            />
          </View>

          <View style={styles.viewIngredient}>
            <Text style={styles.textIngredient}>Ingrediente 3:</Text>
            <TextInput
                style={styles.input}
                onChangeText={(t) => {setIngrediente3(t)}}
                value={ingrediente3}
                placeholder="Ingrediente 3"
                placeholderTextColor="#2D4468"
            />
          </View>
          {!loading &&
            <TouchableOpacity style={styles.submit} onPress={handleSubmit}>
              <Text style={styles.textSubmit}>Enviar</Text>
            </TouchableOpacity>
          }
          {loading &&
            <ActivityIndicator size="large" color="#2D4468" />
          }
        </View>
      </KeyboardAvoidingView>
    );
}