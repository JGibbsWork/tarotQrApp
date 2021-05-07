import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Components/MainPage/main.js';
import Barcode from './Components/FunctionalPieces/Barcode.js'
import CardView from './Components/FunctionalPieces/CardView.js'

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#000000'
            }
          }}
          />
          <Stack.Screen
          name="Barcode"
          component={Barcode}
          />
          <Stack.Screen
          name="CardView"
          component={CardView}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

