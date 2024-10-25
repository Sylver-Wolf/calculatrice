import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, Button, Pressable } from 'react-native';

export default function App(props) {
  const { onPress, title = 'Save' } = props;
  return (
    <View style={styles.container}>
      <Text>Coucou !</Text>
      <Button
        title='OUI²'
        color="#fff"
        onPress={() => Alert.alert('Je suis le bouton 1 :D')} />
      <StatusBar style="auto" />
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
