import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{color:"red",fontSize:40,}}>Tipu Sultan</Text>
      <View >
        <Text style={styles.viewRound1}>React Native</Text>
        <Text style={styles.viewRound2}>React JS</Text>
        <Text style={styles.viewRound3}>Node JS</Text>
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
  viewRound1:{
    backgroundColor:'white',
    color: 'green'
  },
  viewRound2:{
    color:'blue'
  },
  viewRound3:{
    color:'#895498'
  }

});
