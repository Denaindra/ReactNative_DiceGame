import React, { useState, useRef } from "react";
import { Button, View, Text, StyleSheet, Alert } from "react-native";
import Card from "../componets/Card";
import NumberContainer from "../componets/NumberContainer";

const RadomNumerGerator = (exclude, mini, max) => {
  const rnfNumer = Math.floor(Math.random() * 100 + 1);

  if (rnfNumer == exclude) {
    RadomNumerGerator(exclude, 1, 100);
  } else {
    return rnfNumer;
  }
};

function GameScreen(props) {
  const [currentGuess, setCurrentGuess] = useState(
    RadomNumerGerator(props.userChoice, 1, 100)
  );

  const currentLower = useRef(1);
  const currentHigher = useRef(100);

  //mordern js we ca directly use userChoice without props.userChoice
  //const {userChoice} = props


  const NextGussHandler = (bindval) => {
    if (
      (bindval == "lower" && currentGuess > props.userChoice) ||
      (bindval == "high" && currentGuess < props.userChoice)
    ) {
  
      Alert.alert("Don't lie", "Plese Cofirmed correctly", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
      ]);
    }

    if (bindval == "lower") {
      currentLower.current = currentGuess;
    } else {
      currentHigher.current = currentGuess;
    }
    const newGuess = RadomNumerGerator(
      currentGuess,
      currentLower.current,
      currentHigher.current
    );

    setCurrentGuess(newGuess);
  };

  return (
    <View style={styles.container}>
      <Text>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.btnContainer}>
        <Button title="Lower" onPress={NextGussHandler.bind(this, "lower")} />
        <Button title="Grater" onPress={NextGussHandler.bind(this, "high")} />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
    flex: 1,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 200,
    maxWidth: "80%",
  },
});

export default GameScreen;
