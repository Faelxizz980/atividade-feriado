import { StyleSheet ,View, Text } from 'react-native';

const CardData = ({ Data, Nome,Tipo }) => {

  return (
    <View style={styles.card}>
      <Text style={styles.texto}>Data: {Data}</Text>
      <Text style={styles.texto}>Nome: {Nome}</Text>
      <Text style={styles.texto}>Tipo: {Tipo}</Text>
    </View>
  );
}

export  default CardData;

const styles = StyleSheet.create({
  card: {
    width: 250,
    backgroundColor: '#1e3a8a',
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