import * as React from 'react';
import { useState } from 'react'
import * as Font from 'expo-font';
import AppLoading  from 'expo-app-loading';
import { Text, View, ScrollView, StyleSheet, Button, TouchableOpacity } from 'react-native';
import first from '../../decks/decks.js';
import { LinearGradient } from 'expo-linear-gradient';


export default Library = (props) => {
  let [fontloaded, setfontloaded] = useState(false);
  let temp = props.route.params.suit
  let cardList = () => {
    return first[temp].map((element, idx) => {
      return (
        <View key={idx}>
          <TouchableOpacity style={page.buttonContainer} onPress={() => props.navigation.navigate('CardDefinition', element)}>
            <Text style={page.button}>{element.name}</Text>
          </TouchableOpacity>
        </View>
      )
    })
  }


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
            <ScrollView style={page.list}>
              {cardList()}
            </ScrollView>
        </View>
      )
    }
}

const page = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
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
    marginBottom: 30,
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
    marginTop: 3,
    marginRight: 25,
    marginLeft: 25
  },
  list: {
    marginTop: '5%',
    marginBottom: 50
  },
  button: {
    fontSize: 30,
    color: 'white',
    fontFamily: 'Didot',
    alignSelf: "center"
  }
});