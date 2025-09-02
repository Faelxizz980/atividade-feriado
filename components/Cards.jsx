import { StyleSheet, View, Text } from 'react-native';

export const CardCep = ({ cep, estado, city, bairro, rua }) => {
  return (
    <View style={styles.cardCep}>
      <Text style={styles.texto}>Cep: {cep}</Text>
      <Text style={styles.texto}>Estado: {estado}</Text>
      <Text style={styles.texto}>Cidade: {city}</Text>
      <Text style={styles.texto}>Bairro: {bairro}</Text>
      <Text style={styles.texto}>Rua: {rua}</Text>
    </View>
  );
};

export const CardDDD = ({ city,uf }) => {
  return (

    <View style={styles.card}>
      <Text style={styles.texto}>Cidade: {city}</Text>
      <Text style={styles.texto}>UF: {uf}</Text>
    </View>
  );
}

export const CardIbge = ({ Nome, Codigo_Ibge }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.texto}>Nome: {Nome}</Text>
      <Text style={styles.texto}>Código IBGE: {Codigo_Ibge}</Text>
    </View>
  );
};

const CardData = ({ Data, Nome,Tipo }) => {
  console.log(Nome)
  return (
    <View style={styles.card}>
      <Text style={styles.texto}>Data: {Data}</Text>
      <Text style={styles.texto}>Nome: {Nome}</Text>
      <Text style={styles.texto}>Tipo: {Tipo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    cardCep:{
        width: 200,
        alignItems: 'center'
    },
    texto:{
        color: '#fff'
    }
})

export default {CardCep, CardDDD, CardData, CardIbge}