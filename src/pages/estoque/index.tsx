import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import service from '../../services';
import { styles } from './styles';

export default function Estoque() {

  const [barData, setBarData] = useState([
    {value: 0, label: 'ing1'}, 
    {value: 0, label: 'ing2'}, 
    {value: 0, label: 'ing3'}
  ]);


  function getEstoque() {
    service
      .getEstoque()
      .then((response) => {
          let newBarData = barData.map(item => ({
            ...item,
            value: response[item.label.toLowerCase()]
          }));
          setBarData(newBarData);
      })
      .catch((error) => {
          console.log(error);
          alert("Ocorreu um erro ao obter o estoque.")
      });
  }

  useEffect(() => {
    getEstoque();
  },[]);

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Monitoramento de Estoque</Text>
          <TouchableOpacity onPress={getEstoque}>
            <Icon name="reload" color={"#2D4468"} size={30} />
          </TouchableOpacity>
        </View>
        <Text style={styles.alert}>Ao notar uma baixa de estoque avise um dos supervisores, por gentileza!</Text>
        <BarChart data={barData} barWidth={82} frontColor="#2D4468"/>
      </View>
    );
}