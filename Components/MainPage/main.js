import * as React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function Main (props) {
  return (
    <View style={page.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['#000000', '#000000', '#192f6a']}
        style={page.container}
      >
      <Text style ={page.header}> WELCOME </Text>
      <Text style={page.body}>To use our app, simply press "scan card" below and point your camera at your card from our deck. </Text>
      <Button
      onPress={() => props.navigation.navigate('Barcode')}
      title="Scan Card"/>
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
  }
});