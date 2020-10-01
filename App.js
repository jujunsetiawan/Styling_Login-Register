import React from 'react'
import { View , Text , Button , Image , TextInput , ScrollView , StyleSheet, Picker, Switch, ActivityIndicator, ImageBackground} from 'react-native'

class App extends React.Component {
  render() {
    return (
      <ScrollView>
      <View>
        <Image
        style = {{width: 100, height:100, alignContent: 'center', alignSelf: 'center', borderRadius: 50, marginTop: 10}}
        source = {require('./src/assets/gambar.jpg')}
        />

        <Text style = {{fontSize: 15, marginTop: 5}}>
          Username :
        </Text>

        <TextInput style = {{height: 29, borderWidth:2, borderColor: 'dodgerblue', marginBottom: 10}}
        />

        <View style = {style.tombol}>
        <Button                
        title = "sumbit"
        onPress={() => alert('BOOM')}
        />
        </View>

        <View>
        <Picker
        style={{height: 50, width: 150}}
        onValueChange={(itemValue, itemIndex) => (itemValue)} >
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="Java" value="java" />
       </Picker>
       </View>

       <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        />

        <ActivityIndicator />
       <ActivityIndicator size="large" />
       <ActivityIndicator size="small" color="#0000ff" />
       <ActivityIndicator size="large" color="#00ff00" />
      
       </View>
      </ScrollView>
    )
  }
}

export default App

const style = StyleSheet.create({
  tombol: {
    flexDirection: 'row',
    justifyContent: 'center',
  }
})