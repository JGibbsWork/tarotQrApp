import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import first from '../../decks/decks.js';
import { LinearGradient } from 'expo-linear-gradient';

export default CardView = (props) => {
  let data = props.route.params.card;
  let card = JSON.parse(data)
  let meaning = first[card.Suit][card.Position];


  return(
    <View style={page.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['#000000', '#000000', '#192f6a']}
        style={page.container}
      >
      <Text style ={page.text}>{meaning.name}</Text>
      <Text style ={page.text}>{meaning.description}</Text>
      </LinearGradient>
    </View>
  )
}

const page = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    marginTop: 50,
    fontFamily: 'Didot',
    fontSize: 30,
    color: 'white'
  },
});