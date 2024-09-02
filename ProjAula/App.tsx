import React from 'react';
import { View, StyleSheet } from 'react-native';
import Titulo from "./src/Titulo"

export default () => (
    <View style={style.App}>
      <Titulo
        principal="Cadastro de Produto"
        secundario="Tela de Produtos" />
    </View>

);

const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#AC9',
  },
});

