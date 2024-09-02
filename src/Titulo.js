import React from "react";
import {Text} from 'react-native';
import estilo from "./estilo";


export default comp => {
    return(
    <>
      <Text style={estilo.FontGrande}>{comp.principal}</Text>
      <Text>{comp.secundario}</Text>
    </>
    )
}