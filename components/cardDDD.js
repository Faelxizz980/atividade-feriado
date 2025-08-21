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
    container:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '20rem',
        height: '3rem',
        borderRadius: '8px',
        backgroundColor: '#494949',
        marginTop: '1rem',
        marginBottom: '1rem'
    }
});