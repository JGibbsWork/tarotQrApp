import * as React from 'react';
import { useState } from 'react'
import { Text, View, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Font from 'expo-font';
import AppLoading  from 'expo-app-loading';

export default function WrongCode () {
  let [fontloaded,setfontloaded] = useState(false);

  const fetchFonts = () => {
    return Font.loadAsync({
    'SourceCodePro': require('../../assets/Fonts/SourceCodePro.ttf'),
    });
    };

  return (
    <View style={page.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['#000000', '#000000', '#192f6a']}
        style={page.container}
      >
      <Text style ={page.header}>OOPS</Text>
      <Text style ={page.body}>Looks like you tried to scan a QR but not one of our tarot cards! Please try again</Text>
      <TouchableOpacity style={page.buttonContainer} onPress={() => props.navigation.navigate('Barcode')}>
        <Text style={page.button}>Scan Another</Text>
      </TouchableOpacity>
      </LinearGradient>
    </View>
  )
}

const page = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    marginTop: 80,
    textAlign: 'center',
    fontFamily: 'Didot',
    fontSize: 50,
    color: 'white'
  },
  body: {
    marginTop: 50,
    marginBottom: 50,
    textAlign: 'center',
    fontFamily: 'SourceCodePro',
    fontSize: 18,
    color: 'white'
  },
  buttonContainer: {
    elevation: 8,
    backgroundColor: "#192f6a",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginRight: 75,
    marginLeft: 75
  },
  button: {
    fontSize: 30,
    color: 'white',
    fontFamily: 'Didot',
    alignSelf: "center"
  }
});