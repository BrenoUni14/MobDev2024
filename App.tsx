import React, { useRef, useState } from 'react';
import {
  Text, Button, View, StyleSheet, DrawerLayoutAndroid
} from 'react-native';

const App =() => {
  const drawer = useRef (null);
  const [drawerPosition, setDrawerPosition] = useState('left');
  const changeDrawerPosition = () => {
    if (drawerPosition === 'left') {
      setDrawerPosition('right')
    }
    else{
      setDrawerPosition('left')
    }
  };

  const navigationView = () => (
    <View style = {[styles.container, styles.navigationContainer]}>
      <Text style = {styles.paragraph}>I'm in the Drawer</Text>
      <Button title='Fechar o Drawer' onPress={() => drawer.current.closeDrawer()} />
    </View>
  );

  return(
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={drawerPosition}
      renderNavigationView={navigationView}>
        <View style = {styles.container}>
          <Text style ={styles.paragraph}> Drawer on the {drawerPosition}!</Text>
          <Button 
            title = "Carregando o Drawer"
            onPress={() => changeDrawerPosition()}
            />
            <Text style ={styles.paragraph}> Deslize do lado ou pressione o botão abaixo para vê-lo!</Text>
          <Button 
            title = "Carregando o Drawer"
            onPress={() => drawer.current.openDrawer()}
            />
        </View>
      </DrawerLayoutAndroid>
  )

}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16
  },
  navigationContainer: {
    backgroundColor: '#ecf0f1'
  },
  paragraph:{
    padding: 16,
    fontSize: 15,
    textAlign: 'center',
  }
})


export default App;
