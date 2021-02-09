import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: 'center',
        backgroundColor: "#aaaaaa"
    },
    footerView: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    footerLink: {
        color: "#788eec",
        fontWeight: "bold",
        fontSize: 16
    },
    addMedButton: {
        backgroundColor: "#263a90",
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: 'center'
    },
    addMedButtonText: {
      fontSize: 20,
      padding: 10,
      color: "white"

    },
    medCard: {
      width: "90%",

      padding: 20,
      borderColor:"grey",
      borderStyle: "solid",
      borderWidth: 1,
      margin: 5,
      borderRadius: 10,
      backgroundColor: "white",
      elevation: 8,
      display: "flex",
      flexDirection: "column",
      flexWrap: "wrap",
      justifyContent: "space-between",

    },
    medCardTitleBox: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",

    },
    dosageFrequencyBox: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between"
    },
    mainHomeContentView: {
      display: "flex",
      flexDirection: "column",
      flexWrap: "wrap",
      justifyContent: "flex-start",
      alignContent: "center",
    },
    sectionTitle: {
      width: "100%",
      textAlign: "center",
      padding: 10,
      backgroundColor: "#49a8de",
      fontSize: 25,
      elevation: 10,
      color: "white"
    },
    medCardContainer: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      flexWrap: "wrap",
      justifyContent: "center",
      alignContent: "center",
      paddingTop: 20,
      paddingBottom: 20,

    },
    medInfo: {
      textAlign: "right",
      fontSize: 20
    },
    medName: {
      fontSize: 25,
      color: "#263a90",
      paddingBottom: 10

    }

})
