import * as React from 'react';
import { useState } from 'react'
import * as Font from 'expo-font';
import AppLoading  from 'expo-app-loading';
import { Text, View, StyleSheet, ScrollView, Button, TouchableOpacity } from 'react-native';
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
      return(
        <View style={page.container}>
          <View style={page.card}>
            <View style={page.box}>
              <Text style ={page.header}>{meaning.name}</Text>
              <View style={page.viewText}>
                <ScrollView>
                  <View>
                    {meaning.characteristics.map((element, idx) => (
                      <Text style={page.chars} key={idx}>{element}</Text>
                    ))}
                    <Text style ={page.body}>{meaning.description}</Text>
                  </View>
                </ScrollView>
              </View>
                <TouchableOpacity style={page.buttonContainer} onPress={() => props.navigation.navigate('Library')}>
                  <Text style={page.button}>Back to Suits</Text>
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
  card:{
    borderColor: 'white',
    borderWidth: 1,
    marginTop:50,
    minHeight: 700
  },
  box: {
    borderRadius: 3
  },
  viewText: {
    maxHeight: 450,
    minHeight: 450,
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 40
  },
  chars:{
    marginTop: 10,
    textAlign: 'center',
    fontFamily: 'SourceCodePro',
    fontSize: 25,
    color: 'white'
  },
  textBox: {
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 40
  },
  header: {
    marginTop: 20,
    marginBottom: 50,
    textAlign: 'center',
    fontFamily: 'Didot',
    fontSize: 50,
    color: 'white'
  },
  body: {
    marginTop: 50,
    marginBottom: 30,
    textAlign: 'center',
    marginHorizontal: 20,
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