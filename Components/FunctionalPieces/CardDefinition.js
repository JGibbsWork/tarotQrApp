import * as React from 'react';
import { useState } from 'react'
import * as Font from 'expo-font';
import AppLoading  from 'expo-app-loading';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default CardDefinition = (props) => {
  let [fontloaded,setfontloaded] = useState(false);
  let meaning = props.route.params

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
      console.log(props.route)
      return(
        <View style={page.container}>
          <LinearGradient
            // Background Linear Gradient
            colors={['#000000', '#000000', '#192f6a']}
            style={page.container}
          >
          <Text style ={page.header}>{meaning.name}</Text>
          <Text style ={page.body}>{meaning.description}</Text>
          <TouchableOpacity style={page.buttonContainer} onPress={() => props.navigation.navigate('Library')}>
            <Text style={page.button}>Back to Suits</Text>
          </TouchableOpacity>
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