

import React, { useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput
} from 'react-native';


const TextoClick = () => {
  const [titleText, TextoClick] = useState("Veja a mensagem [Aperte aqui]")
  const bodyText = "Melhor Faculdade de Tecnologia";

  const onPressTitle = () => {
    TextoClick ("Fatec Zona Leste")
  };

  const [text, onChangeText] = React.useState('Digite um texto');
  const [number, onChangeNumber] =React.useState('');

  return(
    <>
    
     <View
        style={{
          flexDirection: "row",
          height: 50
        }}
      >
       <View style={{ backgroundColor:"red", flex:0.1}}></View>
       <View style={{ backgroundColor:"orange", flex:0.1}}></View>
       <View style={{ backgroundColor:"yellow", flex:0.1}}></View>
       <View style={{ backgroundColor:"green", flex:0.1}}></View>
       <View style={{ backgroundColor:"blue", flex:0.1}}></View>
       <View style={{ backgroundColor:"white", flex:0.1}}></View>
       <View style={{ backgroundColor:"pink", flex:0.1}}></View>
       <View style={{ backgroundColor:"purple", flex:0.1}}></View>
       <View style={{ backgroundColor:"black", flex:0.1}}></View>
       <View style={{ backgroundColor:"gray", flex:0.1}}></View>
     </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text>Bem Vindo ao React Native</Text>
        <Nome />
        <Faculdade />
        <Text style = {styles.baseText}>
          <Text style = {styles.titleText} onPress={onPressTitle}>
            {titleText}
            {'\n'}
            {'\n'}
          </Text>
          <Text style ={{
            justifyContent: "center"
          }}>{bodyText}</Text>
        </Text>
        <View style = {styles.container}>
          <Image 
            style = {styles.tinyLogo}
            source={{
              uri: 'https://pagepro.co/blog/wp-content/uploads/2020/03/react-native-logo-884x1024.png'
            }}/>
            <Image 
            style = {styles.tinyLogo}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png'
            }}/>
        </View>
        <SafeAreaView>
          <TextInput 
          style = {styles.input}
          onChangeText = {onChangeText}
          value={text}>

          </TextInput>
        </SafeAreaView>
      </View>
      <View
        style={{
          flexDirection: "row",
          height: 50
        }}
      >
       <View style={{ backgroundColor:"red", flex:0.1}}></View>
       <View style={{ backgroundColor:"orange", flex:0.1}}></View>
       <View style={{ backgroundColor:"yellow", flex:0.1}}></View>
       <View style={{ backgroundColor:"green", flex:0.1}}></View>
       <View style={{ backgroundColor:"blue", flex:0.1}}></View>
       <View style={{ backgroundColor:"white", flex:0.1}}></View>
       <View style={{ backgroundColor:"pink", flex:0.1}}></View>
       <View style={{ backgroundColor:"purple", flex:0.1}}></View>
       <View style={{ backgroundColor:"black", flex:0.1}}></View>
       <View style={{ backgroundColor:"gray", flex:0.1}}></View>
      </View>
   </>
    )
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Cochin",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    justifyContent: "center"
  },
  container: {
    padding:20,
    flexDirection:"row"
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 60,
    height: 60
  }
})

const Nome = () => {
  return(
        <Text>Bem Vindo Breno</Text>
  )
}
const Faculdade = () => {
  return(
        <Text>Você está na Fatec Zona Leste</Text>
  )
}



export default TextoClick;
