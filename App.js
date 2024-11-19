import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, Button, Pressable } from 'react-native';

import CalcButton from './component/Button.js'

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
      <View style={styles.row}>
        <CalcButton name='bla' />
        <CalcButton name='bla' />
        <CalcButton name='bla' />
        <CalcButton name='bla' />
      </View>
      <View style={styles.row}>
        <CalcButton name='bla2' />
        <CalcButton name='bla2' />
        <CalcButton name='bla2' />
        <CalcButton name='bla2' />
      </View>
      <View style={styles.row}>
        <CalcButton name='bla2' />
        <CalcButton name='bla2' />
        <CalcButton name='bla2' />
        <CalcButton name='bla2' />
      </View>
      <View style={styles.row}>
        <CalcButton name='bla2' />
        <CalcButton name='bla2' />
        <CalcButton name='bla2' />
        <CalcButton name='bla2' />
      </View>
      <View style={styles.row}>
        <CalcButton name='bla2' />
        <CalcButton name='bla2' />
        <CalcButton name='bla2' />
        <CalcButton name='bla2' />
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
