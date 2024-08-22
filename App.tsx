import React, { useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Alert,
  Button,
  FlatList,
  StatusBar,
  SectionList
} from 'react-native';


/*
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
          <TextInput 
          style = {styles.input}
          onChangeText = {onChangeNumber}
          value={number}
          placeholder= "DIGITE UM NÚMERO"
          keyboardType= "numeric">

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
*/

/*
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
  },
  input: {
    height:40,
    margin: 12,
    borderWidth: 1,
    padding: 10
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


const Separator = () => <View style = {styles.separator} />;

const App = () => (
  <SafeAreaView style = {styles.container}>
    <View>
      <Text style = {styles.title}>
      O título e o manipulador onPress são necessários.
      Recomenda-se definir acessibilityLabel para ajudar
      a tornar seu aplicativo utilizável por todos.
      </Text>

      <Button 
        title = "Aperte Aqui"
        color= "red"
        onPress = {() => Alert.alert('Saída simples de um botão')}
      />

    </View>

    <Separator/>

    <View>
      <Text style={styles.title}>
        Todas as interações para o componente estão desabilitadas.
      </Text>

      <Button 
        title = "Aperte Aqui"
        disabled
        onPress = {() => Alert.alert('Não é possível pressionar!')}
      />

    </View>

    <Separator/>

    <View>
      <Text style={styles.title}>
        Essa estratégia de layout permite que o 
        título defina a largura do botão.
      </Text>
        <View style= { styles.fixToText}>
          <Button 
          title = "Botão da Esquerda"
          onPress = {() => Alert.alert('Botão da Esquerda, aperte.')}
          />
          <Button 
          title = "Botão da Direita"
          onPress = {() => Alert.alert('Botão da Direita, aperte.')}
          />
        </View>
    </View>

  </SafeAreaView>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 16,
  },
  fixToText:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  separator:{
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth
  }
})
*/

const DATA = [
  {
    title: 'Pratos Principais',
    data: ['Pizza', 'Hamburguer', 'Risotto']

  },
  {
    title: 'Pratos de Chefe',
    data: ['Frango Frito', 'Cebolas Empanadas', 'Batata Frita']

  },
  {
    title: 'Bebidas',
    data: ['Água', 'Pepsi', 'Suco']

  },
  {
    title: 'Sobremesas',
    data: ['Pudim', 'Sorvete']

  }
]

type ItemProps = {title: string};

const Item = ({ title }: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Comp = () => {
  return(
  <SafeAreaView style={styles.container}>
    <SectionList
    sections={DATA}
    keyExtractor={(item, index) => item + index}
    renderItem={({item}) => (
      <View style={styles.item}>
        <Text style={styles.title}>{item}</Text>
      </View>
    )}
    renderSectionHeader={({ section: {title}}) => (
      <Text style = {styles.header}>{title}</Text>
    )}
    />
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    marginHorizontal: 16
  },
  item:{
    backgroundColor: '#f9c277',
    padding: 20,
    marginVertical: 8,
  },
  header:{
    fontSize: 32,
    backgroundColor: '#fff'
  },
  title:{
    fontSize: 24
  }
});

export default Comp;
