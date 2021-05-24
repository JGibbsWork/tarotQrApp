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
              <View style={page.headBox}>
                <Text style ={page.header} adjustsFontSizeToFit>{meaning.name}</Text>
              </View>
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
              <View style={page.please}>
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
    marginTop:'5%',
    height: '85%',
    elevation: 1000,
    position: 'absolute',
    borderRadius: 3,
    flexDirection: 'column'
  },
  viewText: {
    height: '65%',
    borderColor: 'white',
    flex: 6,
    borderTopWidth: 1,
    borderBottomWidth: 1
  },
  chars:{
    marginTop: '8%',
    textAlign: 'center',
    fontFamily: 'SourceCodePro',
    fontSize: 25,
    color: 'white'
  },
  textBox: {
    borderColor: 'white',
    borderWidth: 1,
  },
  headBox: {
    flex: 2,
    justifyContent: 'center'
  },
  header: {
    marginTop: '5%',
    marginBottom: '5%',
    textAlign: 'center',
    fontFamily: 'Didot',
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white'
  },
  body: {
    marginTop: '10%',
    textAlign: 'center',
    marginHorizontal: '6%',
    fontFamily: 'SourceCodePro',
    fontSize: 18,
    color: 'white'
  },
  buttonContainer: {
    paddingVertical: '5%',
    alignSelf: 'stretch'
  },
  button: {
    fontSize: 30,
    fontWeight: 'bold',
    justifyContent: 'center',
    color: 'white',
    fontFamily: 'Didot',
    alignSelf: "center"
  },
  please: {
    flex: 2,
    justifyContent: 'center',
    backgroundColor: "#192f6a",
    zIndex: 1,
  }
});