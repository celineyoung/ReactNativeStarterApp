/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { createStackNavigator } from "react-navigation";

class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.nameMessage}>What is your name?</Text>
        <TextInput style={styles.body}>Name: </TextInput>
        <Button
          title="Enter"
          onPress={() => this.props.navigation.navigate('Home') }
        />
      </View>
    );
  }
}

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.nameMessage}>Welcome to SWEN 325!</Text>
        <Text style={styles.body}>You must be Alex Potanin</Text>
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Login: LoginScreen,
    Home: HomeScreen
  },
  {
    initialRouteName: "Login"
  }
);

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
  nameMessage: {
    fontSize: 20,
    margin: 10,
    fontWeight: "bold",
    color: "#000000"
  },
  body: {
    marginLeft: 10
  }
});
