import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button
} from 'react-native';
import Constants from 'expo-constants';
import first from '../../decks/decks.js';

export default CardView = (props) => {
  let data = props.route.params.card;
  let card = JSON.parse(data)
  let meaning = first[card.Suit][card.Position];


  return(
    <View>
      <Text>{meaning.name}</Text>
      <Text>{meaning.description}</Text>
    </View>
  )
}

CardView.navigationOptions = {
  headerTitle: null,
  headerLeft: () => {
    return null;
  },
}; 