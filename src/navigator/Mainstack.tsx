import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/home';
import Menu from './Menu';

const Mainstack = createStackNavigator();

export default () => {
	return (
		<Mainstack.Navigator screenOptions={{
			headerShown: false
		}}>
			<Mainstack.Screen name="Home" component={Home} />
            <Mainstack.Screen name="Menu" component={Menu} />
		</Mainstack.Navigator>
	);
}