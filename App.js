import React from 'react'
import {View, Text, Image, Button, ScrollView, TouchableOpacity, StyleSheet} from 'react-native'

class App extends React.Component {
  render() {
    return (
      <View>
      <View style = {style.view1}>
      <TouchableOpacity onPress = {() => alert('KOSONG')}>
        <Image style = {{height: 15, width: 25, marginLeft: 2}}
          source = {require('./src/assets/a.png')}
        />
        </TouchableOpacity>
        <Text style = {style.text}>Kakak Asuh Indonesia</Text>
      </View>
      <ScrollView horizontal = {true} style = {{flexDirection: 'row'}}>
      <TouchableOpacity onPress = {() => alert('Pilih Adik Asuh')} style = {style.view2}>
       <Image style = {{height: 35, width: 35, marginTop: 13}}
          source = {require('./src/assets/d.png')}
        />
        <Text>Pilih Adik Asuh</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress = {() => alert('Santri Mandiri Ada 83')} style = {style.view2}>
         <Text style = {{marginTop: 20, fontWeight: "bold", fontSize: 20}}>83</Text>
         <Text>Santri Mandri</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress = {() => alert('Santri Belum Mandiri Ada 71')} style = {style.view2}>
         <Text style = {{marginTop: 20, fontWeight: "bold", fontSize: 20}}>71</Text>
         <Text style = {{textAlign: 'center'}}>Santri Belum Mandri</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress = {() => alert('Calon Santri Ada 45')} style = {style.view2}>
         <Text style = {{marginTop: 20, fontWeight: "bold", fontSize: 20}}>45</Text>
         <Text>Calon Santri</Text>
      </TouchableOpacity>
      </ScrollView>
      <Text style = {{marginTop: 15, marginLeft: 10, fontWeight: 'bold', fontSize: 20}}>Adik Asuh Saya</Text>
      <View style = {{backgroundColor: 'aqua', height: 90, flexDirection: 'row',margin: 7, alignItems: 'center', justifyContent: 'space-between', borderRadius: 10}}>
      <TouchableOpacity onPress = {() => alert('Nama Adik Asuh : Jujun Setiawan')} style = {{marginLeft: 5}}>
        <Image style = {{height: 50, width: 50, alignSelf: 'center'}}
          source = {require('./src/assets/avatar.png')}
        />
        <Text>Nama Adik Asuh</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress = {() => alert('Transfer Via BNI')} style = {{marginRight: 15}}>
        <Image style = {{height: 50, width: 50, alignSelf: 'center'}}
          source = {require('./src/assets/c.png')}
        />
        <Text>Transfer</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress = {() => alert('Telah Terkonfirmasi')} style = {{marginRight: 5}}>
        <Image style = {{height: 50, width: 50, borderRadius: 25, alignSelf: 'center'}}
          source = {require('./src/assets/e.jpg')}
        />
        <Text>Konfirmasi</Text>
      </TouchableOpacity>
      </View>
      <View style = {{backgroundColor: 'aqua', height: 90, flexDirection: 'row',margin: 7, alignItems: 'center', justifyContent: 'space-between', borderRadius: 10}}>
      <TouchableOpacity onPress = {() => alert('KOSONG')} style = {{marginLeft: 5}}>
        <Image style = {{height: 40, width: 40, alignSelf: 'center'}}
          source = {require('./src/assets/a.png')}
        />
        <Text>Nama Adik Asuh</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress = {() => alert('KOSONG')} style = {{marginRight: 15}}>
        <Image style = {{height: 40, width: 40, alignSelf: 'center'}}
          source = {require('./src/assets/a.png')}
        />
        <Text>Transfer</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress = {() => alert('KOSONG')} style = {{marginRight: 5}}>
        <Image style = {{height: 40, width: 40, borderRadius: 25, alignSelf: 'center'}}
          source = {require('./src/assets/a.png')}
        />
        <Text>Konfirmasi</Text>
      </TouchableOpacity>
      </View>
      </View>
    )
  } 
}

export default App

const style = StyleSheet.create({
  view1: { 
    backgroundColor: 'dodgerblue',
    flexDirection: 'row',
    height: 35,
    alignItems: "center"
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 19,
    marginLeft: 6,
    marginBottom: 2,
  },
  view2: {
    backgroundColor: 'aqua',
    height: 80,
    width: 90,
    alignItems: 'center',
    marginTop: 5,
    marginLeft: 5,
    borderRadius: 10,
  },
})