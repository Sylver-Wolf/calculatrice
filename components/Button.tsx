import React from "react";
import { StyleSheet, Text, Pressable, Alert } from "react-native";
import colors from "../styles/Colors";

export type props = {
  name: string;
}

const CalcButton: React.FC<props> = ({name}) => {
  return (
  <Pressable style={styles.button}
    onPress={() => Alert.alert('ceci est un beau message')}
    android_ripple={{
      color: 'white',
    }}>
    <Text style={styles.text}>{name}</Text>
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
    backgroundColor: colors.PURPLE,
  },
  text: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: colors.DARK_TEXT,
  },
});
