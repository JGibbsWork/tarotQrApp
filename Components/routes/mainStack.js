import { createStackNaviagtor } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Main from '../MainPage/main.js';
import Barcode from '../FunctionalPieces/Barcode.js'

const screens = {
  Main: {
    screen: Main
  },
  Barcode: {
    screen: Barcode
  }
}


const mainStack = createStackNaviagtor(screens)