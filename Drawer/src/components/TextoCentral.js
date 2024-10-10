import React from 'react'
import {View, Text} from 'react-native'

export default comp => (
    <View style = {{
        flex: 2,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: comp.corFundo || '#000'
    }}>
        <Text style ={{
            fontSize: 50,
            color: comp.corTexto
        }}>
            {comp.children}
        </Text>
    </View>
)