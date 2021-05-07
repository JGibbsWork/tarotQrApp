import * as React from 'react';
import { useState } from 'react'
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { Text, View, StyleSheet, Button } from 'react-native';
import first from '../../decks/decks.js';
import { LinearGradient } from 'expo-linear-gradient';


export default CardView = (props) => {
  let [fontloaded,setfontloaded] = useState(false);
  let data = props.route.params.card;
  let card = JSON.parse(data)
  let meaning = first[card.Suit][card.Position];

  const fetchFonts = () => {
    return Font.loadAsync({
    'SourceCodePro': require('../../assets/Fonts/SourceCodePro.ttf'),
    });
    };
    
    if(!fontloaded){
      return(
        <AppLoading
        startAsync={fetchFonts}
        onFinish={()=>{setfontloaded(true)}}
        onError={console.warn}/>
      )
    }
    else {
      return(
        <View style={page.container}>
          <LinearGradient
            // Background Linear Gradient
            colors={['#000000', '#000000', '#192f6a']}
            style={page.container}
          >
          <Text style ={page.header}>{meaning.name}</Text>
          <Text style ={page.body}>{meaning.description}</Text>
          <Button
          onPress={() => props.navigation.navigate('Barcode')}
          title="Scan Another"/>
          </LinearGradient>
        </View>
      )
    }
}

const page = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    marginTop: 70,
    textAlign: 'center',
    fontFamily: 'Didot',
    fontSize: 50,
    color: 'white'
  },
  body: {
    marginTop: 50,
    textAlign: 'center',
    fontFamily: 'SourceCodePro',
    fontSize: 18,
    color: 'white'
  }
});