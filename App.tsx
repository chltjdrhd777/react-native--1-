import React from "react";
import { StyleSheet, Text, View } from "react-native";

//<View> = is like <div> in react native
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.yellowview}></View>
      <View style={styles.blueview}></View>
    </View>
  );
}

//container = father
//"flex:1" in container = allows me to have all the space available
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  yellowview: { flex: 1, backgroundColor: "yellow" },
  blueview: { flex: 1, backgroundColor: "blue" }
});
