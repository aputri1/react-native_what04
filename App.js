import React, {Component} from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import Judul from './Components/Judul'

export default class App extends Component {
  render() {
    return (
      <View> 
        <Judul/>
        <Text>Nama : Ajeng S</Text>
        <Text>Kelas : XI RPL 1</Text>
        <Text>Absen : 04 </Text>
        <Image style={{width: 400, height: 500}}
        source={require('./1.jpg')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    color: 'white',
  },
  instructions: {
    textAlign: 'center',
    color: 'white',
    marginBottom: 5,
  },
});
