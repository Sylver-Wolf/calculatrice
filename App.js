import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, Button, Pressable } from 'react-native';

import { CalcButton } from './component';

export default function App(props) {
  const { onPress } = props;
  return (
    <View>
      <StatusBar style="auto" />
      <View style={styles.row}>
        <Pressable style={styles.button}
          onPress={() => Alert.alert('VTK en sueur')}
          android_ripple={{
            color: 'white',
          }}>
          <Text style={styles.text}>1</Text>
        </Pressable>
        <Pressable style={styles.button}
          onPress={() => Alert.alert('VTK en sueur')}
          android_ripple={{
            color: 'white',
          }}>
          <Text style={styles.text}>2</Text>
        </Pressable>
        <Pressable style={styles.button}
          onPress={() => Alert.alert('VTK en sueur')}
          android_ripple={{
            color: 'white',
          }}>
          <Text style={styles.text}>3</Text>
        </Pressable>
        <CalcButton Nom="4" />
      </View>
    </View>
  );
}

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
  container: {
    margin: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }
});
