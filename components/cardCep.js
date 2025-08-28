import { StyleSheet, View, Text } from 'react-native';

export const CardCep = ({ cep, address }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.texto}>Cep: {address.cep}</Text>
      <Text style={styles.texto}>Estado: {address.state}</Text>
      <Text style={styles.texto}>Cidade: {address.city}</Text>
      <Text style={styles.texto}>Bairro: {address.neighborhood}</Text>
      <Text style={styles.texto}>Rua: {address.street}</Text>
      <Text style={styles.texto}>Serviço: {address.service}</Text>
    </View>
  );
};

export default CardCep;

const styles = StyleSheet.create({
  card: {
     width: '100%',
    backgroundColor: '#30539e',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    shadowColor: '#097ec2',
    flexDirection: 'column',
    justifyContent: 'space-between',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  texto: {
    fontSize: 16,
    color: '#f0eded',
  }
});