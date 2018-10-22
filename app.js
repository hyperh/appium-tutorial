import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
} from 'react-native';

export class appiumTutorial extends Component {
  state = {
    counter: 0,
    text: '',
  }

  onPress = () => this.setState({ counter: this.state.counter + 1 })
  onChangeText = text => this.setState({ text })

  render() {
    return (
      <View style={styles.container} accessibilityLabel="testview">
        <Text style={styles.welcome}>
          Welcome to 1React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>

        <Text accessibilityLabel="counter">{this.state.counter}</Text>
        <Button onPress={this.onPress} title="Press me" accessibilityLabel="button" />

        <Text accessibilityLabel="text">{this.state.text}</Text>
        <TextInput
          accessibilityLabel="textinput"
          style={{ width: '100%' }}
          onChangeText={this.onChangeText}
          value={this.state.text}
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

export default appiumTutorial;
