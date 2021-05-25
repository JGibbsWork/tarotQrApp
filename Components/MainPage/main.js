import * as React from 'react';
import { useState } from 'react'
import { Text, View, Button, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Font from 'expo-font';
import AppLoading  from 'expo-app-loading';


export default function Main (props) {
  let [fontloaded,setfontloaded] = useState(false);

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
  return (
    <View style={page.container}>
        <View style={page.box}>
          <Text style ={page.header}> Ready to INTRSPCT? </Text>
        </View>
      <ScrollView>
        <Text style={page.body}>This is your go to quick resource for your INTRSPCT Tarot deck. To see quick definitions of all cards, check the library of the 78 cards in Card Definitions. Otherwise when you are ready to conduct a reading press scan card and begin connecting the dots in your life.</Text>
        <TouchableOpacity style={page.buttonContainer} onPress={() => props.navigation.navigate('Barcode', {scanned: true})}>
          <Text style={page.button}>Scan Card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={page.buttonContainer} onPress={() => props.navigation.navigate('Library')}>
          <Text style={page.button}>Card Definitions</Text>
        </TouchableOpacity>
        <Text style={page.bottom}>Need some cards? Please check our store below</Text>
        <TouchableOpacity style={page.buttonContainer} onPress={() => Linking.openURL('https://www.etsy.com/listing/1009603122/intrspct-tarot-deck?ref=shop_home_active_1')}>
          <Text style={page.button}>Buy Tarot Cards</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

const page = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
  box: {
    borderRadius: 5,
    borderBottomColor: 'white',
    borderWidth: 1,
    marginLeft: 45,
    marginRight: 45
  },
  header: {
    marginTop: '5%',
    textAlign: 'center',
    fontFamily: 'Didot',
    fontSize: 50,
    color: 'white'
  },
  body: {
    marginTop: '8%',
    marginBottom: '8%',
    textAlign: 'center',
    fontFamily: 'SourceCodePro',
    fontSize: 18,
    color: 'white'
  },
  bottom: {
    marginTop: '8%',
    marginBottom: '8%',
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
    marginRight: 50,
    marginLeft: 50
  },
  button: {
    fontSize: 30,
    color: 'white',
    fontFamily: 'Didot',
    alignSelf: "center"
  }
});