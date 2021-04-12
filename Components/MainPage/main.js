import * as React from 'react';
import { Text, View, Button } from 'react-native';


export default function Main (props) {
  return (
    <View >
      <Text> WELCOME TO MAIN PAGE </Text>
      <Button
      onPress={() => props.navigation.navigate('Barcode')}
      title="Scan Card"/>
    </View>
  )
}