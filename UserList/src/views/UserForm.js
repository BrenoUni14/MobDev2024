import React from 'react'
import {SafeAreaView, Text, StyleSheet} from 'react-native'

export default (comp) => {
    return(
        <SafeAreaView style={styles.container}>
            <Text>
                Miniprojeto 9, precisa aparecer os dados completo do usuário selecionado.
                Os componentes fazem a importação e exportação de dados, ele tem o id, que 
                podem ser enviado e recebidos via componentes.
                Cadastrar o usuário também precisa fazer.
            </Text>
        </SafeAreaView>

        
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})