import React from "react";
import { View, StyleSheet, Text } from "react-native";

function Header(props) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 70,
    width: "100%",
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    
  },
  title: {
    color: "#ffff",
    fontSize: 25,
  },
});

export default Header;
