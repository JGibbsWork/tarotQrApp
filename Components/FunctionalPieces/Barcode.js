import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import first from '../../decks/decks.js';

import { NativeRouter, Route, Link } from "react-router-native";
import { BarCodeScanner } from 'expo-barcode-scanner';

export default class BarcodeScannerExample extends React.Component {
  state = {
    hasCameraPermission: null
  };

  async componentDidMount() {
    this.getPermissionsAsync();
  }

  getPermissionsAsync = async() => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted'
    });
  };

  render() {
    const {
      hasCameraPermission
    } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for Camera permission</Text>
    }
    if (hasCameraPermission === false) {
      return <Text> No access to camera</Text>
    }
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <BarCodeScanner onBarCodeScanned = {
            this.handleBarCodeScanned
          }
          style={StyleSheet.absoluteFill}
          />
        </View>
      </View>
    );
  }

  handleBarCodeScanned = ({
    type,
    data
    }) => {
      console.log(typeof data)
      let temp = data.substring(0,7)
      if (temp === '{"Suit"') {
        this.props.navigation.navigate('CardView', {card: data})
      } else {
        this.props.navigation.navigate('WrongCode')
      }

  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  }
});