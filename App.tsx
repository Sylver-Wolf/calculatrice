import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';

import CalcButton from './components/Button'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.separator}>

      </View>
      <View style={styles.separator}>
        <View style={styles.row}>
          <CalcButton name='C' />
          <CalcButton name='<-' />
          <CalcButton name='%' />
          <CalcButton name='/' />
        </View>
        <View style={styles.row}>
          <CalcButton name='7' />
          <CalcButton name='8' />
          <CalcButton name='9' />
          <CalcButton name='x' />
        </View>
        <View style={styles.row}>
          <CalcButton name='4' />
          <CalcButton name='5' />
          <CalcButton name='6' />
          <CalcButton name='-' />
        </View>
        <View style={styles.row}>
          <CalcButton name='1' />
          <CalcButton name='2' />
          <CalcButton name='3' />
          <CalcButton name='+' />
        </View>
        <View style={styles.row}>
          <CalcButton name='' />
          <CalcButton name='0' />
          <CalcButton name=',' />
          <CalcButton name='=' />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
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
  },
  separator: {
    flexDirection: 'column',
    flexGrow: 1,
    height: '50%',
  },
  calc_display: {
    display: 'flex',
    height: '100%'
  },
  calc_display_text: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
});
