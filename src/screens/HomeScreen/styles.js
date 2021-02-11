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
        marginTop: 40,
        backgroundColor: "white",
        padding: 20
    },
    logoHeader: {
      padding: 50,
      backgroundColor: "whitesmoke",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignContent: "center"
    },
    logo: {
      height: 150,
      width: 150,

    },
    logoutButton: {
      backgroundColor: "#49a8de",
      padding: 10,
      width: 100,

      borderRadius: 10,
      alignItems: "center",
      justifyContent: 'center',
      alignSelf: "center",

    },
    logoutButtonText: {
      fontSize: 20,
      color: "white"
    },
    addMedButton: {
        backgroundColor: "#263a90",
        width: 200,
        height: 50,
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: 'center',
        alignSelf: "center",
        elevation: 8
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

    },
    calendarKey: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 5,
      backgroundColor: "white"
    },
    calendar: {
      marginTop: 10,
      elevation: 8
    }


})
