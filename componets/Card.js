import React from "react";
import { View, StyleSheet } from "react-native";

function Card(props) {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    alignItems: "center",
    shadowRadius: 20,
    elevation: 15,
    backgroundColor: "white",
    borderRadius: 5,
    paddingRight: 10,
    paddingLeft: 10,
    height: 150,
    justifyContent: "space-evenly",
  },
});

export default Card;
