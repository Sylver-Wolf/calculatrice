import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import CalcButton from './components/Button.js'

export default function App() {
  return (
    <View style={styles.container}>
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
        <CalcButton name='bla3' />
        <CalcButton name='bla3' />
        <CalcButton name='bla3' />
        <CalcButton name='bla3' />
      </View>
      <View style={styles.row}>
        <CalcButton name='bla4' />
        <CalcButton name='bla4' />
        <CalcButton name='bla4' />
        <CalcButton name='bla4' />
      </View>
      <View style={styles.row}>
        <CalcButton name='bla5' />
        <CalcButton name='bla5' />
        <CalcButton name='bla5' />
        <CalcButton name='bla5' />
      </View>
      <StatusBar style="auto" />
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
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
  }
});
