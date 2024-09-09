import React, {useState} from "react";
import { Text, Button, View } from "react-native";
import estilo from './Estilo';

export default comp=>{
    const [numero, setNumero] = useState(comp.inicial)

    const inc = () => setNumero(numero + 1)
    const dec = () => setNumero(numero - 1)


    return(
        <>
        <View style={estilo.container}>
            <Text style={estilo.FontGrande}>
                {numero}
            </Text>
            <View style={estilo.button}>
                <Button
                title="+"
                onPress={inc}
                color="#4caf50" // Verde para o botão de +
                />
            </View>
            <View style={estilo.button}>
                <Button
                title="-"
                onPress={dec}
                color="#f44336" // Vermelho para o botão de -
                />
            </View>
        </View>
        </>
    )
}