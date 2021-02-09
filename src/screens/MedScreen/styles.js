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
      }
})
