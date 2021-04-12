import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button
} from 'react-native';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import first from '../../decks/decks.js';
import CardView from './CardView.js'

import { NativeRouter, Route, Link } from "react-router-native";
import {
  BarCodeScanner
} from 'expo-barcode-scanner';

export default class BarcodeScannerExample extends React.Component {
  state = {
    hasCameraPermission: null,
    scanned: false,
  };

  async componentDidMount() {
    this.getPermissionsAsync();
  }

  getPermissionsAsync = async() => {
    const {
      status
    } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted'
    });
  };

  render() {
    const {
      hasCameraPermission,
      scanned
    } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for Camera permission</Text>
    }
    if (hasCameraPermission === false) {
      return <Text> No access to camera</Text>
    }
    return (
      <View >
        <BarCodeScanner onBarCodeScanned = {
          scanned ? undefined : this.handleBarCodeScanned
        }
        style = {
          StyleSheet.absoluteFillObject
        }
        />

        {
          scanned && ( <
            Button title = {
              'Tap to Scan Again'
            }
            onPress = {
              () => this.setState({
                scanned: false
              })
            }
            />
          )
        }
      </View>
    );
  }

  handleBarCodeScanned = ({
    type,
    data
    }) => {
    this.setState({
      scanned: true
    });
    this.props.navigation.navigate('CardView', {card: data})
  };
}