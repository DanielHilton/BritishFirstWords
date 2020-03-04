import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import {Audio} from 'expo-av';
import {Button, Image} from "react-native";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

async function meow() {
  const sound = new Audio.Sound();
  const meowSound = new Audio.Sound();
  try {
    await sound.loadAsync(require('./sounds/cat.aac'));
    await sound.playAsync();
    await meowSound.loadAsync(require('./sounds/meow.mp3'));
    await meowSound.playAsync();
  } catch {
    console.log('fuckity fuck');
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={{ resizeMode: 'center'}} source={require('./images/cat.png')}/>
        <Button onPress={meow} title="Cat"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
