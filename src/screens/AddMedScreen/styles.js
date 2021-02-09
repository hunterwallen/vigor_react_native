import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputTitle: {
      marginTop: 10,
      marginLeft: 30,
      marginRight: 30,
      fontSize: 15,
      color: "#263a90"
    },
    input: {
        height: 48,
        borderRadius: 5,

        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16
    },
    button: {
      backgroundColor: "#263a90",
      marginLeft: 30,
      marginRight: 30,
      marginTop: 20,
      height: 48,
      borderRadius: 10,
      alignItems: "center",
      justifyContent: 'center',
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },

    combinedInputs: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      marginLeft: 30,
      marginRight: 30,
      marginTop: 10,
      marginBottom: 10
    },
    pickers: {
      backgroundColor: "white",
      width: "48%",
      borderRadius: 5
    },
    picker: {
      backgroundColor: "white",
      marginLeft: 30,
      marginRight: 30,
      marginTop: 10,
      marginBottom: 10,
      borderRadius: 5
    }
})
