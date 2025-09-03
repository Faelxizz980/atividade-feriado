import { StyleSheet, View, Text } from 'react-native';

export const CardCep = ({ cep, estado, city, bairro, rua }) => {
  return (
    <View style={styles.card}>
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

export const CardCnpj = ({uf , cep , cnpj, razao_social, nome_fantasia}) =>{
  return(
    <View style={styles.card}>
      <Text style={styles.texto}>CNPJ: {cnpj}</Text>
      <Text style={styles.texto}>Razão Social: {razao_social}</Text>
      <Text style={styles.texto}>Nome Fantasia: {nome_fantasia}</Text>
      <Text style={styles.texto}>UF: {uf}</Text>
      <Text style={styles.texto}>CEP: {cep}</Text>
    </View>
  );
}




const styles = StyleSheet.create({
  View:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: 250,
    backgroundColor: '#797a7e',
    borderRadius: 16,
    padding: 20,
    marginVertical: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5, // Para sombra no Android
  },
  texto: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 8,
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default {CardCep, CardDDD, CardIbge, CardCnpj}