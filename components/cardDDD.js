import { StyleSheet, View, Text } from 'react-native';

export const CardDDD = ({ city,uf }) => {
  return (

    <View style={styles.card}>
      <Text style={styles.texto}>Cidade: {city}</Text>
      <Text style={styles.texto}>UF: {uf}</Text>
    </View>
  );
}

export default CardDDD;

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: '#30539e',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    shadowColor: '#097ec2',
    flexDirection: 'row',
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
  },
});