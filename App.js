import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Login from "./src/Components/login"
import Register from "./src/Components/register"
 class App extends Component {
  render() {
    return (
      <Login/>
      // <Register/>
    )
  }
}

const styles = StyleSheet.create({})

export default App;