import * as React from 'react';
import { useState } from 'react'
import * as Font from 'expo-font';
import AppLoading  from 'expo-app-loading';
import { Text, View, ScrollView, StyleSheet, Button, TouchableOpacity } from 'react-native';
import first from '../../decks/decks.js';
import { LinearGradient } from 'expo-linear-gradient';


export default Library = (props) => {
  let [fontloaded, setfontloaded] = useState(false);

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
            <Text style={page.header}>SUITS</Text>
            <ScrollView style={page.listView}>
            <TouchableOpacity style={page.buttonContainer} onPress={() => props.navigation.navigate('SuitList', {suit: 'MajorArcana'})}>
            <Text style={page.button}>Major Arcana</Text>
          </TouchableOpacity>
          <TouchableOpacity style={page.buttonContainer} onPress={() => props.navigation.navigate('SuitList', {suit: 'Wands'})}>
            <Text style={page.button}>Wands</Text>
          </TouchableOpacity>
          <TouchableOpacity style={page.buttonContainer} onPress={() => props.navigation.navigate('SuitList', {suit: 'Pentacles'})}>
            <Text style={page.button}>Pentacles</Text>
          </TouchableOpacity>
          <TouchableOpacity style={page.buttonContainer} onPress={() => props.navigation.navigate('SuitList', {suit: 'Cups'})}>
            <Text style={page.button}>Cups</Text>
          </TouchableOpacity>
          <TouchableOpacity style={page.buttonContainer} onPress={() => props.navigation.navigate('SuitList', {suit: 'Swords'})}>
            <Text style={page.button}>Swords</Text>
          </TouchableOpacity>
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
    marginTop: 100,
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
  listView: {
    marginTop: 100
  },
  button: {
    fontSize: 30,
    color: 'white',
    fontFamily: 'Didot',
    alignSelf: "center"
  }
});