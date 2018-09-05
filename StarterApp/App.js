/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 *
 * underlineColorAndroid="#000000"
 */

import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import { createStackNavigator } from "react-navigation";
import { TextField } from "react-native-material-textfield";
//import Alerts from "react-native-alerts";

class LoginScreen extends React.Component {
  static navigationOptions = {
    title: "Login"
  };

  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.nameMessage}>What is your name?</Text>
        <TextField
          style={styles.body}
          label="Name:"
          onChangeText={text => this.setState({ text })}
        />
        <Button
          style={{ marginLeft: 10, marginRight: 10 }}
          title="Enter"
          onPress={() => {
            this.props.navigation.navigate("Home", {
              name: this.state.text
            });
            Alert.alert('Welcome!', 'Welcome to SWEN 325 App, Dear ' + this.state.text + '!');
          }}
        />
      </View>
    );
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Home"
  };

  render() {
    const { navigation } = this.props;
    const name = navigation.getParam("name");

    return (
      <View style={styles.container}>
        <Text style={styles.nameMessage}>Welcome to SWEN 325!</Text>
        <Text style={styles.body}>You must be {name}</Text>
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
    marginLeft: 10,
    marginRight: 10
  }
});
