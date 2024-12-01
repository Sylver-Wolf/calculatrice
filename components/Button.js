import React from "react";
import { StyleSheet, Text, Pressable, Alert } from "react-native";

const CalcButton = (props) => {
  return (
  <Pressable style={styles.button}
    onPress={() => Alert.alert('ceci est un beau message')}
    android_ripple={{
      color: 'white',
    }}>
    <Text style={styles.text}>{props.name}</Text>
  </Pressable >
  );
};

export default CalcButton;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    width: 75,
    height: 75,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
