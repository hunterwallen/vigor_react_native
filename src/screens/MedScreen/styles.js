import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        backgroundColor: "#ffffff"
      },
      medCard: {
        padding: 30
      },
      medTitle: {
        fontSize: 25,
        alignSelf: "center",
        padding: 10,
        color: "#263a90"
      },
      medInfoLine: {
        marginBottom: 10,
        marginTop: 10,
        width: "80%",
        alignSelf: "center",
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "space-between",
        borderBottomWidth: 2,
        borderBottomColor: "#aaaaaa"
      },
      medTitles: {
        fontSize: 15
      },
      medInfo: {
        fontSize: 19,
        fontWeight: "bold"
      },
      editMedButton: {
        backgroundColor: "#263a90",
          marginLeft: 30,
          marginRight: 30,
          marginTop: 20,
          height: 48,
          borderRadius: 10,
          alignItems: "center",
          justifyContent: 'center'
      },
      editMedButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
      },
      deleteMedButton: {
          backgroundColor: "red",
          marginLeft: 90,
          marginRight: 90,
          marginTop: 20,
          height: 38,
          borderRadius: 10,
          alignItems: "center",
          justifyContent: 'center'
      },
      deleteMedButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
      },
      buttonContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",

        height: 250
      }
})
