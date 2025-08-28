import { StyleSheet, View, Text } from 'react-native';

export const CardIbge = ({ Nome, Codigo_Ibge }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.texto}>Nome: {Nome}</Text>
      <Text style={styles.texto}>Código IBGE: {Codigo_Ibge}</Text>
    </View>
  );
};

export default CardIbge;

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: '#30539e',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    shadowColor: '#097ec2',
    flexDirection: 'column',
    justifyContent: 'flex-start',
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
  },
});
