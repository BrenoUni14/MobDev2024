import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#808080',
        },
    button: {
        width: 100,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        },
    buttonText: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
        },
    buttonAdd: {
        backgroundColor: '#4caf50', // Verde para o botão de +
        },
    buttonSubtract: {
        backgroundColor: '#f44336', // Vermelho para o botão de -
        },
    FontGrande: {
        fontSize: 30,
        fontFamily: "Times  New Roman"
    },
    FontMedia: {
        fontSize: 20,
        fontFamily: "Arial"
    }
});