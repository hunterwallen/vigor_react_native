import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: 'center',
        backgroundColor: "#ffffff"
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
      width: 200,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "center",
      margin: 10,
      backgroundColor: "#263a90",
      borderRadius: 10,
      elevation: 8
    },
    addMedButtonText: {
      fontSize: 20,
      padding: 10,
      color: "white"

    },
    medCard: {
      padding: 15,
      borderColor:"grey",
      borderStyle: "solid",
      borderWidth: 2,
      margin: 5,
      borderRadius: 10,
      backgroundColor: "white",
      elevation: 8
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
      fontSize: 18,
      elevation: 10
    },
    medCardContainer: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      alignContent: "flex-start",

      paddingBottom: 20
    },
    medInfo: {
      textAlign: "right",
      fontSize: 20
    },
    medTitles: {
      textAlign: "center",
      fontWeight: "bold",
      paddingTop: 5,
      fontSize: 15
    }
})
