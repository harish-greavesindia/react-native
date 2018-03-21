/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Navigation} from 'react-native-navigation';

class react_native_navigation_bootstrap extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit app.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

class Screen2 extends Component {
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to Screen2 !
          </Text>
          <Text style={styles.instructions}>
            To get started, edit app.js
          </Text>
          <Text style={styles.instructions}>
            Press Cmd+R to reload,{'\n'}
            Cmd+D or shake for dev menu
          </Text>
        </View>
      );
    }
  }

  class Screen3 extends Component {
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to Screen3 !
          </Text>
          <Text style={styles.instructions}>
            To get started, edit app.js
          </Text>
          <Text style={styles.instructions}>
            Press Cmd+R to reload,{'\n'}
            Cmd+D or shake for dev menu
          </Text>
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

Navigation.registerComponent('Screen1', () => react_native_navigation_bootstrap);
Navigation.registerComponent('Screen2', () => Screen2);
Navigation.registerComponent('Screen3', () => Screen3);
Navigation.startTabBasedApp({
    tabs: [
      {
        label: 'One',
        screen: 'Screen1', // this is a registered name for a screen
        title: 'Screen One',
        icon: require('./assets/icons/icon.png'),
      },
      {
        label: 'Two',
        screen: 'Screen2',
        title: 'Screen Two',
        icon: require('./assets/icons/icon.png'),
      },
      {
        label: 'Three',
        screen: 'Screen3',
        title: 'Screen Three',
        icon: require('./assets/icons/icon.png'),
      }
    ]
  });