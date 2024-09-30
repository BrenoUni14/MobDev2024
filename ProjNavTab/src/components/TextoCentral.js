import React from 'react'
import {View, Text} from 'react-native'

export default comp => (
    <View style = {{
        flex: 1,
        justifyContent: "center",
        backgroundColor: comp.corFundo
    }}>
        <Text style ={{
            fontSize: 50,
            color: comp.corTexto
        }}>
            {comp.children}
        </Text>
    </View>
)