import { StyleSheet, View, Text } from 'react-native';

export const CardBank = ({ bank, bankData }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>Código: {bank}</Text>
      <Text style={styles.text}>Nome: {bankData.name}</Text>
      <Text style={styles.text}>Nome Completo: {bankData.fullName}</Text>
      <Text style={styles.text}>ISPB: {bankData.ispb}</Text>
    </View>
  );
};

export default CardBank;

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: '#30539e',
    padding: 15,
    marginVertical: 10,
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 4,
    // Faz as informações ficarem uma embaixo da outra
    flexDirection: 'column',
  },
  text: {
    color: '#f0eded',
    fontSize: 16,
    marginBottom: 5,
  },
});
