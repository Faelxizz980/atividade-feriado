import { StyleSheet, View, Alert, ScrollView } from 'react-native';
import InputText from '../components/InputText.js';
import CardData from '../components/cardData.js';
import * as feriados from '../services/feriados.js';
import { useState } from 'react';

export default function Tela_Feriado() {
  const [l_f, setFeriados] = useState([]);

  const verificarFeriado = (ano) => {
    if (!ano || ano.length !== 4) {
      return;
    }

    const anoNum = parseInt(ano, 10);
    const anoAtual = new Date().getFullYear();

    if (isNaN(anoNum) || anoNum < 1700 || anoNum > anoAtual) {
      Alert.alert("Ano inválido", `Digite um ano entre 1700 e ${anoAtual}.`);
      setFeriados([]);
      return;
    }

    feriados.getFeriados(anoNum)
      .then((list_Feriados) => {
        setFeriados(list_Feriados);
      })
      .catch((error) => {
        console.error('Erro ao buscar feriado:', error);
        Alert.alert('Erro', 'Não foi possível consultar os feriados. Tente novamente.');
      });
  };

  return (
    <View style={styles.container}>
      <InputText
        maxLength={4}
        placeholder="Digite o ano"
        keyboardType="numeric"
        onChangeText={(ano) => verificarFeriado(ano.trim())}
      />
      <ScrollView style={styles.scroll}>
        {l_f.map((item, index) => (
          <CardData
            key={index}
            Data={item.date}
            Nome={item.name}
            Tipo={item.type}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  scroll: {
    marginTop: 16,
    width: "100%",
  }
});
