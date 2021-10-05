import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";

import Card from "../componets/Card";
import Header from "../componets/Header";
import NumberContainer from "../componets/NumberContainer";
import UserTextInput from "../componets/UserTextInput";
import Colors from "../constant/Colors";
import GameScreen from "./GameScreen";

function MainScreen(props) {
  const [enteredValue, setenteredValue] = useState("");
  const [selectedNumber, setselectedNumber] = useState(0);
  const [confirmed, setconfirmed] = useState(false);
  const [userNumber, setUserNumber] = useState();

  let confirmOutPut;
  let contetScreen;

  const StartGameHandler = () => {
    setUserNumber(selectedNumber);
  };

  const ConfirmedInteger = () => {
    if (!isNaN(enteredValue) && enteredValue != "") {
      setselectedNumber(enteredValue);
      setconfirmed(true);
    } else {
      setconfirmed(false);
      Alert.alert("Valide Numer", "Cofirmed", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
      ]);
    }
  };

  if (confirmed) {
    confirmOutPut = (
      <Card style={styles.resultContainer}>
        <Text style={styles.confirmOutPutText}>Chosen Number</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button title="Start Number" onPress={() => StartGameHandler()} />
      </Card>
    );
  }

  contetScreen = (
    <View style={styles.continer}>
      <Text style={styles.mainTitle}>Start a New Game</Text>
      <Card style={styles.inputContaier}>
        <Text style={styles.coreTitle}>Select a number</Text>
        <UserTextInput
          style={styles.input}
          maxLength={2}
          keyboardType="numeric"
          textAlign={"center"}
          onChangeText={(text) => setenteredValue(text)}
          value={enteredValue}
        />
        <View style={styles.buttonsView}>
          <View style={styles.button}>
            <Button
              title="Reset"
              color={Colors.Primary}
              onPress={() => setenteredValue("")}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Confirm"
              color={Colors.Acent}
              onPress={() => ConfirmedInteger()}
            />
          </View>
        </View>
      </Card>
      {confirmOutPut}
    </View>
  );

  if (userNumber) {
    //userChoice props parameter
    contetScreen = <GameScreen userChoice={userNumber} />;
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.parentView}>
        <Header title="Gess a Number" />
        {contetScreen}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
  },
  continer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  mainTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  coreTitle: {
    fontSize: 15,
    fontWeight: "bold",
  },
  inputContaier: {
    marginTop: 20,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    width: "80%",
    alignItems: "center",

    height: 150,
    justifyContent: "space-evenly",
  },
  buttonsView: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-between",
  },
  button: {
    width: 100,
  },
  input: {
    paddingHorizontal: 5,
  },
  resultContainer: {
    width: "40%",
  },
  confirmOutPutText: {
    textAlign: "center",
  },
});

export default MainScreen;
