import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Tela_Feriado from './screens/Tela_Feriado'; 
import Tela_DDD from './screens/Tela_DDD'; // Importando Tela_DDD
import InputDDD from './components/InputDDD'; // Importando InputDDD

export default function App() {
  return (
    <View style={styles.container}>
       <Tela_DDD/>
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
});
