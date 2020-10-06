import React from "react"
import {View,Text,Button,TouchableOpacity,TextInput,StyleSheet,Image} from "react-native"
import styles from "./style.js"
class Login extends React.Component {
  render() {
    return (
      <View>
        <View style = {styles.view1}>
          <Text style = {styles.text1}>My App</Text>
        </View>
        <View style = {styles.view2}>
        <TouchableOpacity onPress = {() => alert("ini gambar")}>
        <Image style = {styles.image1}
          source = {require("../assets/native.jpg")}/>
        </TouchableOpacity>
        <Text style = {styles.text2}>Learn React Native</Text>
        <Text style = {{color: "white", marginTop: 65, marginLeft: 65}}>Email :</Text>
        <View style = {styles.view3}>
          <TextInput placeholder = "Masukan Alamat Email Anda" style = {{marginLeft: 15, marginTop: 10, borderColor: "white", fontSize: 15}}/>
        </View>
        <Text style = {{color: "white", marginTop: 15, marginLeft: 65}}>Password :</Text>
        <View style = {styles.view3}>
          <TextInput secureTextEntry = {true} placeholder = "Masukan Password" style = {{marginTop: 10, marginLeft: 15, borderColor: "white", fontSize: 15, justifyContent: "center"}}/>
        </View>
        <TouchableOpacity onPress = {() => alert("masuk ke halaman lupa password")}>
        <Text style = {{color: "white", alignSelf: "center", marginLeft: 140, marginTop: 1}}>Lupa Password ?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress = {() => alert("Login Sukses")}>
          <View style = {styles.view4}>
            <Text style = {{color: "white", fontWeight: "bold", fontSize: 20}}>Login</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress = {() => alert("Membuat Akun")}>
          <Text style = {{color: "white", alignSelf: "center", marginTop: 5, }}>Tidak Punya Akun ? Buat Akun</Text>
        </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default Login;
