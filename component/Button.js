import { StyleSheet, Text, Pressable, Alert } from "react-native";

const CalcButton = (Nom) => {
  return <Pressable style={styles.button}
    onPress={() => Alert.alert('VTK en sueur')}
    android_ripple={{
      color: 'white',
    }}>
    <Text style={styles.text}>{Nom}</Text>
  </Pressable >
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
})
