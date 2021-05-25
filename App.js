import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Components/MainPage/main.js';
import Barcode from './Components/FunctionalPieces/Barcode.js'
import CardView from './Components/FunctionalPieces/CardView.js'
import WrongCode from './Components/FunctionalPieces/WrongCode.js'
import Library from './Components/FunctionalPieces/Library.js'
import SuitList from './Components/FunctionalPieces/SuitList.js'
import CardDefinition from './Components/FunctionalPieces/CardDefinition.js'

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
              backgroundColor: 'black',
            },
            headerTintColor: '#fff',
          }}
          />
          <Stack.Screen
          name="Barcode"
          component={Barcode}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: '#fff',
          }}
          />
          <Stack.Screen
          name="CardView"
          component={CardView}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: '#fff',
          }}
          />
          <Stack.Screen
          name="WrongCode"
          component={WrongCode}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: '#fff',
          }}
          />
          <Stack.Screen
          name="Library"
          component={Library}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: '#fff',
          }}
          />
          <Stack.Screen
          name="SuitList"
          component={SuitList}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: '#fff',
          }}
          />
          <Stack.Screen
          name="CardDefinition"
          component={CardDefinition}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: '#fff',
          }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

