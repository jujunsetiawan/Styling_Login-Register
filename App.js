import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Login from "./src/Components/login"
import Register from "./src/Components/register"
import Splash from "./src/Components/splashscreen"

class App extends Component {
constructor() {
  super () 
    console.log("ini Dari constructor");
}
  state = { role: true }
  splash = () => {
    if (this.state.role) {
      return (
        <Splash />
      )
    } else {
      return <Login/>
    }
  }
  render() {
    setTimeout(() => {
      this.componentDidUpdate = () => console.log("Ini Dari Update");
      this.setState({ role: false })
    }, 3000)
    return (
      <>
        {this.splash()}
      </>

    )
  }
}

const styles = StyleSheet.create({})

export default App;