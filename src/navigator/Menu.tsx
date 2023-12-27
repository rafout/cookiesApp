import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Pedido from '../pages/pedido';
import Estoque from '../pages/estoque';
import Perfil from '../pages/perfil';

const Tab = createBottomTabNavigator();

export default function Menu({ route }: any) {

    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#f3f3f3",
          tabBarActiveBackgroundColor: "#5d6cdb",
          tabBarStyle: {
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            height: 55
          },
          tabBarLabelStyle: {
            fontSize: 16
          },
        }}
      >
        <Tab.Screen
          name="Pedidos"
          component={Pedido}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="cookie" color={color} size={30} />
            )
          }}
        />
        <Tab.Screen
          name="Estoque"
          component={Estoque}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="store" color={color} size={28} />
            )
          }}
        />
        <Tab.Screen
          name="Perfil"
          component={Perfil}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="human-male" color={color} size={30} />
            )
          }}
        />
      </Tab.Navigator>
    );
  }