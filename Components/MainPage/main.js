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
      <Text style ={page.text}> JOIN US </Text>
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
  text: {
    marginTop: 80,
    fontFamily: 'Didot',
    fontSize: 50,
    color: 'white'
  },
});