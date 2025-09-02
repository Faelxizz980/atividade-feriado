import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import Tela_Feriado from './screens/Tela_Feriado'; 
// import Tela_DDD from './screens/Tela_DDD'; // Importando Tela_DDD
// import Tela_Ibge from './screens/Tela_Ibge'; // Importando Tela_Ibge
// import InputDDD from './components/InputDDD'; // Importando InputDDD
import Tela_Cep from './screens/Tela_Cep.js';
import Tela_DDD from './screens/Tela_DDD.js';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
    <Drawer.Navigator>
      <Drawer.Screen name='Cep' component={Tela_Cep}/>
      <Drawer.Screen name='DDD' component={Tela_DDD}/>
    </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#002ba1ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
