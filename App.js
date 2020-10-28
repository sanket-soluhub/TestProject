import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  NativeModules,
  Alert,
  Platform,
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '',
    };
  }
  handleClick = () => {
    if (Platform.OS == 'android') {
      NativeModules.CalculateExample.show((result) => {
        this.showPopup(result);
      });
    } else {
      NativeModules.CustomCalculation.show((result) => {
        this.showPopup(result);
      });
    }
  };
  showPopup = (result) => {
    Alert.alert('Result', result, [{text: 'OK'}], {cancelable: false});
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.handleClick} style={styles.button}>
          <Text style={styles.textStyle}>Calculate</Text>
        </TouchableOpacity>
        <Text>{this.state.result}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: 120,
    backgroundColor: 'red',
    borderRadius: 10,
  },
  textStyle: {
    color: '#000', 
    fontWeight: 'bold',
  },
});
