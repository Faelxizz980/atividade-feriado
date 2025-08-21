import { StyleSheet, View } from 'react-native';
import InputText from '../components/InputText.js';
import CardData from '../components/cardData.js';
import { FlashList } from "@shopify/flash-list";

import * as feriados from '../services/feriados.js'
import { useState } from 'react';

export default function Tela_Feriado() {

    const [l_f, setFeriados] = useState([]);

    const verificarFeriado = (ano) => {
      if (!ano || ano.length !== 4) { // Verifica se a data tem o formato correto (YYYY-MM-DD)
        return;
      }
  
      // Consulta a API de feriados nacionais
      feriados.getFeriados(ano)  // Supondo que você tenha uma função que consulta a API de feriados
      .then((list_Feriados) => {
        setFeriados(list_Feriados);      
        console.log(l_f);  
      })
      .catch((error) => {
        console.error('Erro ao buscar feriado:', error);
        Alert.alert('Erro', 'Não foi possível consultar o feriado. Tente novamente.');
      });
    }
  
    return (
        <View style={styles.container}>
          <InputText 
            maxLength={4}
            placeholder="Digite o ano"
            keyboardType="numeric"
            onChangeText={(ano)=> verificarFeriado(ano.trim())} 
          />
          {l_f.map((item, index) => (
            <CardData
              key={index}
              Data={item.date}
              Nome={item.name}
              Tipo={item.type}
            />
          ))}
        </View>
      );
    }
   
  const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
      justifyContent: 'flex-start',
    }
  });