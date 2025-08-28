import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Tela_Feriado from './screens/Tela_Feriado'; 
import Tela_DDD from './screens/Tela_DDD'; // Importando Tela_DDD
import Tela_Ibge from './screens/Tela_Ibge'; // Importando Tela_Ibge
import InputDDD from './components/InputDDD'; // Importando InputDDD
import Tela_Cep from './screens/Tela_Cep';
import Tela_Bank from './screens/tela_Bank.js';
import InputBank from './components/inputBank.js';

export default function App() {
  return (
    <View style={styles.container}>
       <InputBank/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8b8888',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
