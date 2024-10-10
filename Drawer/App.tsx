import React, { PureComponent } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TextoCentral from './src/components/TextoCentral';
import TelaA from './src/views/TelaA'
import TelaB from './src/views/TelaB'
import TelaC from './src/views/TelaC'
import TelaD from './src/views/TelaD'

function FATEC() {
  return(
    <TextoCentral corFundo = '#007'>
      Seja bem vindo a FATEC
    </TextoCentral>
  );
}

function Secretaria() {
  return (
    <TextoCentral corFundo = '#007'>
      Secretaria da FATEC
    </TextoCentral>
  )
}

const Drawer = createDrawerNavigator();

function MeuDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="FATEC" component={FATEC} />
      <Drawer.Screen name="TelaA" component={TelaA} />
      <Drawer.Screen name="TelaB" component={TelaB} />
      <Drawer.Screen name="TelaC" component={TelaC} />
      <Drawer.Screen name="TelaD" component={TelaD} />
      <Drawer.Screen name="Secretaria" component={Secretaria} />
    </Drawer.Navigator>
  )
}

export default function AppTeste() {
  return(
      <NavigationContainer>
        <MeuDrawer/>
      </NavigationContainer>
  );
}
