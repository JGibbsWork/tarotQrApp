import * as React from 'react';
import { useState } from 'react'
import * as Font from 'expo-font';
import AppLoading  from 'expo-app-loading';
import { Text, View, StyleSheet, Button, ScrollView, TouchableOpacity } from 'react-native';

export default WrongCode = (props) => {
  let [fontloaded,setfontloaded] = useState(false);

  const fetchFonts = (props) => {
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
  } else {
    return (
      <View style={page.container}>
          <View style={page.card}>
            <View style={page.box}>
              <Text style ={page.header}>OOPS!</Text>
              <View style={page.viewText}>
              <Text style ={page.body}>Looks like you tried to scan a QR but not one of our tarot cards! Please try again</Text>
              </View>
                <TouchableOpacity style={page.buttonContainer} onPress={() => props.navigation.navigate('Barcode')}>
                  <Text style={page.button}>Scan Again</Text>
                </TouchableOpacity>
                <TouchableOpacity style={page.buttonContainer} onPress={() => props.navigation.navigate('Home')}>
                  <Text style={page.button}>Go Home</Text>
                </TouchableOpacity>
            </View>
          </View>
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
    marginTop: '5%',
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


/*

import * as React from 'react';
import { useState } from 'react'
import { Text, View, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Font from 'expo-font';
import AppLoading  from 'expo-app-loading';

export default function WrongCode () {
  let [fontloaded,setfontloaded] = useState(false);

  const fetchFonts = (props) => {
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
  } else {
    return (
      <View style={page.container}>

        <Text style ={page.header}>OOPS</Text>
        <Text style ={page.body}>Looks like you tried to scan a QR but not one of our tarot cards! Please try again</Text>
        <TouchableOpacity style={page.buttonContainer} onPress={() => props.navigation.navigate('Barcode', {scanned: true})}>
        <Text style={page.button}>Scan Card</Text>
      </TouchableOpacity>
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

*/