import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Tela_Cep from './screens/Tela_Cep.js';
import Tela_DDD from './screens/Tela_DDD.js';
import Tela_Feriado from './screens/Tela_Feriado.js';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Tela_Ibge from './screens/Tela_Ibge.js';
import Tela_Cnpj from './screens/Tela_Cnpj.js';

const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
    <Drawer.Navigator>
      <Drawer.Screen name='Cep' component={Tela_Cep}/>
      <Drawer.Screen name='DDD' component={Tela_DDD}/>
      <Drawer.Screen name='Feriado' component={Tela_Feriado}/>
      <Drawer.Screen name='Ibge' component={Tela_Ibge}/>
      <Drawer.Screen name='Cnpj' component={Tela_Cnpj}/>
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
